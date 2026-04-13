package com.potentia.scholarship.dto;

public class AdminLoginResponse {
    private String message;
    private String token;
    private String username;
    private String email;
    private Long adminId;

    public AdminLoginResponse() {}

    public AdminLoginResponse(String message, String token, String username, String email, Long adminId) {
        this.message = message;
        this.token = token;
        this.username = username;
        this.email = email;
        this.adminId = adminId;
    }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public Long getAdminId() { return adminId; }
    public void setAdminId(Long adminId) { this.adminId = adminId; }
}
