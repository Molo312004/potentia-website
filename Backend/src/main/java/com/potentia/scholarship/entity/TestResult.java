package com.potentia.scholarship.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "test_results")
public class TestResult {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String fullName;
    
    @Column(nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String phone;
    
    @Column(nullable = false)
    private String school;
    
    @Column(nullable = false)
    private String testType;
    
    @Column(nullable = false)
    private Integer totalQuestions;
    
    @Column(nullable = false)
    private Integer correctAnswers;
    
    @Column(nullable = false)
    private Integer wrongAnswers;
    
    @Column(nullable = false)
    private Integer unattempted;
    
    @Column(nullable = false)
    private Integer totalMarks;
    
    @Column(nullable = false)
    private Integer maxMarks;
    
    @Column(nullable = false)
    private Integer duration; // in seconds
    
    @Column(nullable = false)
    private LocalDateTime submittedAt;
    
    @Column(nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;
    
    // PrePersist method to ensure createdAt is set
    @PrePersist
    protected void onCreate() {
        if (this.createdAt == null) {
            this.createdAt = LocalDateTime.now();
        }
    }
    
    // Constructors
    public TestResult() {
        this.createdAt = LocalDateTime.now();
    }
    
    public TestResult(String fullName, String email, String phone, String school, 
                     String testType, Integer totalQuestions, Integer correctAnswers, 
                     Integer wrongAnswers, Integer unattempted, Integer totalMarks, 
                     Integer maxMarks, Integer duration) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.school = school;
        this.testType = testType;
        this.totalQuestions = totalQuestions;
        this.correctAnswers = correctAnswers;
        this.wrongAnswers = wrongAnswers;
        this.unattempted = unattempted;
        this.totalMarks = totalMarks;
        this.maxMarks = maxMarks;
        this.duration = duration;
        this.submittedAt = LocalDateTime.now();
        this.createdAt = LocalDateTime.now();
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getFullName() {
        return fullName;
    }
    
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPhone() {
        return phone;
    }
    
    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    public String getSchool() {
        return school;
    }
    
    public void setSchool(String school) {
        this.school = school;
    }
    
    public String getTestType() {
        return testType;
    }
    
    public void setTestType(String testType) {
        this.testType = testType;
    }
    
    public Integer getTotalQuestions() {
        return totalQuestions;
    }
    
    public void setTotalQuestions(Integer totalQuestions) {
        this.totalQuestions = totalQuestions;
    }
    
    public Integer getCorrectAnswers() {
        return correctAnswers;
    }
    
    public void setCorrectAnswers(Integer correctAnswers) {
        this.correctAnswers = correctAnswers;
    }
    
    public Integer getWrongAnswers() {
        return wrongAnswers;
    }
    
    public void setWrongAnswers(Integer wrongAnswers) {
        this.wrongAnswers = wrongAnswers;
    }
    
    public Integer getUnattempted() {
        return unattempted;
    }
    
    public void setUnattempted(Integer unattempted) {
        this.unattempted = unattempted;
    }
    
    public Integer getTotalMarks() {
        return totalMarks;
    }
    
    public void setTotalMarks(Integer totalMarks) {
        this.totalMarks = totalMarks;
    }
    
    public Integer getMaxMarks() {
        return maxMarks;
    }
    
    public void setMaxMarks(Integer maxMarks) {
        this.maxMarks = maxMarks;
    }
    
    public Integer getDuration() {
        return duration;
    }
    
    public void setDuration(Integer duration) {
        this.duration = duration;
    }
    
    public LocalDateTime getSubmittedAt() {
        return submittedAt;
    }
    
    public void setSubmittedAt(LocalDateTime submittedAt) {
        this.submittedAt = submittedAt;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
