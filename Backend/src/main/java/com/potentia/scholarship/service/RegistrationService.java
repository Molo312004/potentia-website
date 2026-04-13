package com.potentia.scholarship.service;

import com.potentia.scholarship.dto.RegistrationDTO;
import com.potentia.scholarship.entity.Registration;
import com.potentia.scholarship.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class RegistrationService {
    @Autowired
    private RegistrationRepository registrationRepository;

    public Registration registerUser(RegistrationDTO registrationDTO) {
        // Check if email already exists
        Registration existingEmail = registrationRepository.findByEmail(registrationDTO.getEmail());
        if (existingEmail != null) {
            throw new IllegalArgumentException("Email already registered");
        }
        
        // Check if phone number already exists
        Registration existingPhone = registrationRepository.findByPhone(registrationDTO.getPhone());
        if (existingPhone != null) {
            throw new IllegalArgumentException("Phone number already registered");
        }

        Registration registration = new Registration();
        registration.setFullName(registrationDTO.getFullName());
        registration.setEmail(registrationDTO.getEmail());
        registration.setPhone(registrationDTO.getPhone());
        registration.setSchool(registrationDTO.getSchool());
        registration.setRegistrationTime(LocalDateTime.now());

        return registrationRepository.save(registration);
    }

    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    public Registration getRegistrationById(Long id) {
        return registrationRepository.findById(id).orElse(null);
    }

    public Registration getRegistrationByEmail(String email) {
        return registrationRepository.findByEmail(email);
    }
}
