# Potentia Scholarship Backend Setup Guide

## Prerequisites
- Java 17 or higher
- MySQL Server installed and running
- Maven installed

## Setup Instructions

### 1. Create MySQL Database
```sql
CREATE DATABASE potentia_scholarship;
```

### 2. Configure Database Connection
Edit `src/main/resources/application.properties`:
```properties
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```

### 3. Build the Project
```bash
mvn clean install
```

### 4. Run the Application
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

## API Endpoints

### Register User
**POST** `/api/registrations/register`

Request Body:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "school": "Central High School"
}
```

Response:
```json
{
  "message": "Registration successful!",
  "id": 1,
  "fullName": "John Doe",
  "email": "john@example.com"
}
```

### Get All Registrations
**GET** `/api/registrations/all`

### Get Registration by ID
**GET** `/api/registrations/{id}`

### Get Registration by Email
**GET** `/api/registrations/email/{email}`

## Database Schema
The `registrations` table will be automatically created with:
- id (Primary Key)
- fullName
- email (Unique)
- phone
- school
- registration_time

## CORS Configuration
The backend allows CORS requests from all origins for the `/api/**` endpoints.
