package com.potentia.scholarship.controller;

import com.potentia.scholarship.dto.AdminLoginRequest;
import com.potentia.scholarship.dto.AdminLoginResponse;
import com.potentia.scholarship.dto.AdminRegistrationRequest;
import com.potentia.scholarship.entity.Admin;
import com.potentia.scholarship.service.AdminService;
import com.potentia.scholarship.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AdminController {
    @Autowired
    private AdminService adminService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminLoginRequest loginRequest) {
        try {
            if (loginRequest.getUsername() == null || loginRequest.getUsername().trim().isEmpty() ||
                loginRequest.getPassword() == null || loginRequest.getPassword().isEmpty()) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "Username and password are required");
                return ResponseEntity.badRequest().body(error);
            }

            AdminLoginResponse response = adminService.login(loginRequest);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, String> error = new HashMap<>();
            error.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("message", "An error occurred during login");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            if (authentication == null || !authentication.isAuthenticated()) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "Unauthorized - Please login first");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
            }

            String username = authentication.getName();
            Admin admin = adminService.getAdminByUsername(username);

            Map<String, Object> response = new HashMap<>();
            response.put("id", admin.getId());
            response.put("username", admin.getUsername());
            response.put("email", admin.getEmail());
            response.put("createdAt", admin.getCreatedAt());
            response.put("lastLogin", admin.getLastLogin());

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("message", "Error retrieving profile: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        // Clear security context
        SecurityContextHolder.clearContext();

        Map<String, String> response = new HashMap<>();
        response.put("message", "Logout successful");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/validate-token")
    public ResponseEntity<?> validateToken(@RequestHeader("Authorization") String authHeader) {
        try {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                        Map.of("valid", false, "message", "Invalid token format")
                );
            }

            String token = authHeader.substring(7);

            if (jwtUtil.validateToken(token) && !jwtUtil.isTokenExpired(token)) {
                String username = jwtUtil.extractUsername(token);
                return ResponseEntity.ok(Map.of(
                        "valid", true,
                        "username", username,
                        "message", "Token is valid"
                ));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                        Map.of("valid", false, "message", "Token is invalid or expired")
                );
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    Map.of("valid", false, "message", "Error validating token")
            );
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerAdmin(@RequestBody AdminRegistrationRequest registrationRequest) {
        try {
            // Validate inputs
            if (registrationRequest.getUsername() == null || registrationRequest.getUsername().trim().isEmpty()) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "Username is required");
                return ResponseEntity.badRequest().body(error);
            }

            if (registrationRequest.getPassword() == null || registrationRequest.getPassword().isEmpty()) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "Password is required");
                return ResponseEntity.badRequest().body(error);
            }

            if (registrationRequest.getPassword().length() < 8) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "Password must be at least 8 characters long");
                return ResponseEntity.badRequest().body(error);
            }

            if (registrationRequest.getEmail() == null || registrationRequest.getEmail().trim().isEmpty()) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "Email is required");
                return ResponseEntity.badRequest().body(error);
            }

            if (!registrationRequest.getEmail().matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "Invalid email format");
                return ResponseEntity.badRequest().body(error);
            }

            // Create admin
            Admin admin = adminService.createAdmin(
                    registrationRequest.getUsername(),
                    registrationRequest.getPassword(),
                    registrationRequest.getEmail()
            );

            Map<String, Object> response = new HashMap<>();
            response.put("message", "Admin registered successfully!");
            response.put("id", admin.getId());
            response.put("username", admin.getUsername());
            response.put("email", admin.getEmail());

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, String> error = new HashMap<>();
            error.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("message", "An error occurred during registration");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
}
