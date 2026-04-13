package com.potentia.scholarship.dto;

import java.time.LocalDateTime;

public class RegistrationDTO {
    private Long id;
    private String fullName;
    private String email;
    private String phone;
    private String school;
    private LocalDateTime registrationTime;

    public RegistrationDTO() {}

    public RegistrationDTO(Long id, String fullName, String email, String phone, String school, LocalDateTime registrationTime) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.school = school;
        this.registrationTime = registrationTime;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getSchool() { return school; }
    public void setSchool(String school) { this.school = school; }

    public LocalDateTime getRegistrationTime() { return registrationTime; }
    public void setRegistrationTime(LocalDateTime registrationTime) { this.registrationTime = registrationTime; }
}
