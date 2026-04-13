-- Create Potentia Scholarship Database and Tables

-- Create Database
CREATE DATABASE IF NOT EXISTS potentia_scholarship;
USE potentia_scholarship;

-- Create Admins Table
CREATE TABLE IF NOT EXISTS admins (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    active BOOLEAN DEFAULT TRUE
);

-- Create Registrations Table
CREATE TABLE IF NOT EXISTS registrations (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(10) NOT NULL,
    school VARCHAR(100) NOT NULL,
    registration_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin user
-- Username: anung
-- Password: test1234 (bcrypt hash)
-- Email: admin@potentia.com
INSERT IGNORE INTO admins (username, password, email, created_at, active) 
VALUES (
    'anung',
    '$2a$10$slYQmyNdGzin7olVN/ye2OPST9/PgBkqquzi.Oy6IUgO7UBcc5nz2',
    'admin@potentia.com',
    NOW(),
    true
);

-- Create Test Results Table
CREATE TABLE IF NOT EXISTS test_results (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    school VARCHAR(100) NOT NULL,
    test_type VARCHAR(50) NOT NULL,
    total_questions INT NOT NULL,
    correct_answers INT NOT NULL,
    wrong_answers INT NOT NULL,
    unattempted INT NOT NULL,
    total_marks INT NOT NULL,
    max_marks INT NOT NULL,
    duration INT NOT NULL COMMENT 'Duration in seconds',
    submitted_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_admins_username ON admins(username);
CREATE INDEX idx_admins_email ON admins(email);
CREATE INDEX idx_registrations_email ON registrations(email);
CREATE INDEX idx_registrations_phone ON registrations(phone);
CREATE INDEX idx_registrations_time ON registrations(registration_time);
CREATE INDEX idx_test_results_email ON test_results(email);
CREATE INDEX idx_test_results_phone ON test_results(phone);
CREATE INDEX idx_test_results_test_type ON test_results(test_type);
CREATE INDEX idx_test_results_submitted_at ON test_results(submitted_at);

-- Display created tables
SHOW TABLES;
