package com.potentia.scholarship.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "registrations")
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String school;

    @Column(name = "registration_time", nullable = false)
    private LocalDateTime registrationTime;

    @PrePersist
    protected void onCreate() {
        registrationTime = LocalDateTime.now();
    }

    public Registration() {}

    public Registration(Long id, String fullName, String email, String phone,
                        String school, LocalDateTime registrationTime) {
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
