package com.potentia.scholarship.service;

import com.potentia.scholarship.dto.AdminLoginRequest;
import com.potentia.scholarship.dto.AdminLoginResponse;
import com.potentia.scholarship.entity.Admin;
import com.potentia.scholarship.repository.AdminRepository;
import com.potentia.scholarship.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Login admin
    public AdminLoginResponse login(AdminLoginRequest loginRequest) {
        Optional<Admin> adminOptional = adminRepository.findByUsername(loginRequest.getUsername());

        if (adminOptional.isEmpty()) {
            throw new RuntimeException("Invalid username or password");
        }

        Admin admin = adminOptional.get();

        // Check if admin is active
        if (!admin.getActive()) {
            throw new RuntimeException("Admin account is inactive");
        }

        // Validate password
        if (!passwordEncoder.matches(loginRequest.getPassword(), admin.getPassword())) {
            throw new RuntimeException("Invalid username or password");
        }

        // Update last login time
        admin.setLastLogin(LocalDateTime.now());
        adminRepository.save(admin);

        // Generate JWT token
        String token = jwtUtil.generateToken(admin.getUsername(), admin.getId());

        return new AdminLoginResponse(
                "Login successful",
                token,
                admin.getUsername(),
                admin.getEmail(),
                admin.getId()
        );
    }

    // Get admin by username
    public Admin getAdminByUsername(String username) {
        return adminRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Admin not found"));
    }

    // Get admin by ID
    public Admin getAdminById(Long id) {
        return adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin not found"));
    }

    // Create new admin (for initialization or admin management)
    public Admin createAdmin(String username, String password, String email) {
        if (adminRepository.existsByUsername(username)) {
            throw new RuntimeException("Username already exists");
        }

        Admin admin = new Admin();
        admin.setUsername(username);
        admin.setPassword(passwordEncoder.encode(password)); // Hash password
        admin.setEmail(email);
        admin.setActive(true);

        return adminRepository.save(admin);
    }

    // Hash password
    public String hashPassword(String password) {
        return passwordEncoder.encode(password);
    }

    // Verify password
    public boolean verifyPassword(String rawPassword, String hashedPassword) {
        return passwordEncoder.matches(rawPassword, hashedPassword);
    }
}
