package com.potentia.scholarship.controller;

import com.potentia.scholarship.dto.RegistrationDTO;
import com.potentia.scholarship.entity.Registration;
import com.potentia.scholarship.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {
    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegistrationDTO registrationDTO) {
        try {
            // Validate phone number (must be exactly 10 digits)
            if (!registrationDTO.getPhone().matches("\\d{10}")) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "Phone number must be exactly 10 digits");
                return ResponseEntity.badRequest().body(error);
            }

            // Validate email format
            if (!registrationDTO.getEmail().matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "Invalid email format");
                return ResponseEntity.badRequest().body(error);
            }

            // Validate required fields
            if (registrationDTO.getFullName() == null || registrationDTO.getFullName().trim().isEmpty() ||
                registrationDTO.getEmail() == null || registrationDTO.getEmail().trim().isEmpty() ||
                registrationDTO.getPhone() == null || registrationDTO.getPhone().trim().isEmpty() ||
                registrationDTO.getSchool() == null || registrationDTO.getSchool().trim().isEmpty()) {
                Map<String, String> error = new HashMap<>();
                error.put("message", "All fields are required");
                return ResponseEntity.badRequest().body(error);
            }

            Registration registration = registrationService.registerUser(registrationDTO);
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Registration successful!");
            response.put("id", registration.getId());
            response.put("fullName", registration.getFullName());
            response.put("email", registration.getEmail());

            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            Map<String, String> error = new HashMap<>();
            error.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("message", "An error occurred during registration");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Registration>> getAllRegistrations() {
        List<Registration> registrations = registrationService.getAllRegistrations();
        return ResponseEntity.ok(registrations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRegistrationById(@PathVariable Long id) {
        Registration registration = registrationService.getRegistrationById(id);
        if (registration != null) {
            return ResponseEntity.ok(registration);
        } else {
            Map<String, String> error = new HashMap<>();
            error.put("message", "Registration not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<?> getRegistrationByEmail(@PathVariable String email) {
        Registration registration = registrationService.getRegistrationByEmail(email);
        if (registration != null) {
            return ResponseEntity.ok(registration);
        } else {
            Map<String, String> error = new HashMap<>();
            error.put("message", "Registration not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }
    }
}
