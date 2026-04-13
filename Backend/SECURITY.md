# Secure Admin Authentication System Documentation

## Overview
The Potentia Scholarship Platform now includes a complete secure backend authentication system using JWT (JSON Web Tokens) with bcrypt password hashing.

## System Architecture

### Backend Components

1. **Admin Entity** (`Admin.java`)
   - Stores admin credentials securely
   - Password is hashed using bcrypt
   - Tracks login history
   - Admin can be activated/deactivated

2. **JWT Authentication** 
   - Tokens expire after 24 hours
   - Uses HS256 signature algorithm
   - Claims include username and adminId

3. **Spring Security Configuration**
   - Stateless authentication (no sessions)
   - JWT filter validates all requests
   - CORS enabled for frontend access

### Frontend Components

1. **Admin Login Modal** (index.html)
   - Username and password input
   - Calls backend `/api/admin/login` endpoint
   - Receives JWT token from backend

2. **Admin Dashboard** (admin-dashboard.html)
   - Shows all registrations with date and time
   - Search and filter functionality
   - Export to CSV
   - Requires valid JWT token to access

## API Endpoints

### Authentication Endpoints

#### 1. Login
```
POST /api/admin/login
Content-Type: application/json

Request:
{
  "username": "anung",
  "password": "test1234"
}

Response (Success):
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "username": "anung",
  "email": "admin@potentia.com",
  "adminId": 1
}

Response (Failure - 401):
{
  "message": "Invalid username or password"
}
```

#### 2. Validate Token
```
POST /api/admin/validate-token
Authorization: Bearer <token>

Response (Valid):
{
  "valid": true,
  "username": "anung",
  "message": "Token is valid"
}

Response (Invalid - 401):
{
  "valid": false,
  "message": "Token is invalid or expired"
}
```

#### 3. Get Admin Profile
```
GET /api/admin/profile
Authorization: Bearer <token>

Response (200):
{
  "id": 1,
  "username": "anung",
  "email": "admin@potentia.com",
  "createdAt": "2024-01-15T10:30:00",
  "lastLogin": "2024-04-12T14:25:00"
}
```

#### 4. Logout
```
POST /api/admin/logout
Authorization: Bearer <token>

Response (200):
{
  "message": "Logout successful"
}
```

### Registration Endpoints

#### 5. Get All Registrations
```
GET /api/registrations/all
Authorization: Bearer <token>

Response (200):
[
  {
    "id": 1,
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "school": "DPS School",
    "registrationTime": "2024-04-12T10:15:00"
  },
  ...
]
```

#### 6. Register User
```
POST /api/registrations/register
Content-Type: application/json
(No authentication required)

Request:
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "phone": "9876543211",
  "school": "Delhi Public School"
}

Response (200):
{
  "message": "Registration successful!",
  "id": 2,
  "fullName": "Jane Doe",
  "email": "jane@example.com"
}
```

## Default Admin Account

**Username:** `anung`
**Password:** `test1234`
**Email:** `admin@potentia.com`

⚠️ **Important:** Change this password immediately in production!

To create a new admin or change password, you can:
1. Use the SQL script: `init-admin.sql`
2. Create an admin management endpoint (future enhancement)

## Security Features

### 1. Password Hashing
- Passwords are hashed using bcrypt with salt
- Bcrypt automatically generates a new salt for each password
- Passwords are never stored in plain text

### 2. JWT Token Security
- Tokens include username and adminId claims
- Tokens have expiration time (24 hours by default)
- Tokens are signed with a secret key (HS256)
- Frontend stores token in localStorage (consider using httpOnly cookies in production)

### 3. CORS Configuration
- Allows requests from all origins
- Can be restricted to specific domains in production

### 4. Stateless Authentication
- No session storage on backend
- Each request includes token for validation
- Reduces server memory usage

## Configuration (application.properties)

```properties
# JWT Configuration
jwt.secret=mySecretKeyForPotentiaAdminAuthenticationSystemWithMinimum32CharactersLength
jwt.expiration=86400000  # 24 hours in milliseconds
```

### Changing JWT Secret (Important for Production)
1. Generate a strong secret key (minimum 32 characters)
2. Update `jwt.secret` in `application.properties`
3. All existing tokens will be invalidated (users need to re-login)

## How to Use

### For Users (Registration)
1. Visit index.html
2. Click "Apply for Scholarship Test"
3. Fill in the registration form
4. Click "Register & Continue"
5. You'll see a success message

### For Admins (View Registrations)
1. Visit index.html
2. Click "Admin Login" in the navbar
3. Enter username: `anung`
4. Enter password: `test1234`
5. Click "Login"
6. You'll be redirected to admin-dashboard.html
7. View all registrations with:
   - Search functionality
   - Sort by date
   - Export to CSV
8. Click "Logout" to end session

## Token Flow Diagram

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       │ 1. POST /api/admin/login
       │ {username, password}
       ↓
┌──────────────────┐
│ Backend Server   │
│ - Validate creds │
│ - Hash password  │
│ - Generate JWT   │
└──────┬───────────┘
       │
       │ 2. Return JWT Token
       │
┌──────┴──────────┐
│ Frontend        │
│ Store in Storage│
└──────┬──────────┘
       │
       │ 3. GET /api/registrations/all
       │ + Authorization: Bearer <token>
       ↓
┌──────────────────┐
│ Backend Server   │
│ - Validate Token │
│ - Return Data    │
└──────────────────┘
```

## File Structure

```
Backend/
├── src/main/java/com/potentia/scholarship/
│   ├── entity/
│   │   ├── Admin.java (NEW)
│   │   └── Registration.java
│   ├── dto/
│   │   ├── AdminLoginRequest.java (NEW)
│   │   ├── AdminLoginResponse.java (NEW)
│   │   └── RegistrationDTO.java
│   ├── repository/
│   │   ├── AdminRepository.java (NEW)
│   │   └── RegistrationRepository.java
│   ├── service/
│   │   ├── AdminService.java (NEW)
│   │   └── RegistrationService.java
│   ├── controller/
│   │   ├── AdminController.java (NEW)
│   │   └── RegistrationController.java
│   └── security/ (NEW)
│       ├── SecurityConfig.java
│       └── JwtAuthenticationFilter.java
├── resources/
│   ├── application.properties (UPDATED)
│   └── init-admin.sql (NEW)
└── pom.xml (UPDATED)

Frontend/
├── index.html (UPDATED - Login Modal)
├── admin-dashboard.html (UPDATED - JWT Token)
├── scholarship.html
├── script.js (UPDATED)
├── style.css
└── ...
```

## Building and Running

### Backend
```bash
# Build
mvn clean install

# Run
mvn spring-boot:run
```

### Frontend
- Open `index.html` in browser
- Or serve with a simple HTTP server:
  ```bash
  python -m http.server 8000
  ```

## Troubleshooting

### "Error connecting to server"
- Make sure backend is running on http://localhost:8080
- Check CORS configuration in SecurityConfig.java
- Check browser console for CORS errors

### "Token is invalid or expired"
- Re-login to get a new token
- Check token expiration time in application.properties
- Check that jwt.secret is the same in frontend requests and backend configuration

### "Admin not found"
- Admin account doesn't exist in database
- Run `init-admin.sql` to create default admin
- Or manually insert admin record in database

## Production Recommendations

1. **Change Default Credentials**
   - Update admin username and password
   - Generate new bcrypt hash for password

2. **Secure JWT Secret**
   - Use a strong random secret (64+ characters)
   - Store in environment variables, not in code

3. **Use HTTPS**
   - Always use HTTPS in production
   - JWT tokens should only be transmitted over HTTPS

4. **Token Storage Security**
   - Consider using httpOnly cookies instead of localStorage
   - This prevents XSS attacks from accessing tokens

5. **Rate Limiting**
   - Implement rate limiting on login endpoint
   - Prevent brute force attacks

6. **CORS Restriction**
   - Restrict CORS to specific domains instead of "*"

7. **Token Refresh**
   - Implement token refresh mechanism for long-running sessions

8. **Audit Logging**
   - Log all admin login attempts
   - Track which admin accessed what data
   - Monitor for suspicious activity

9. **Database Security**
   - Use strong database passwords
   - Implement database-level access controls
   - Regular backups

10. **SSL Certificate**
    - Install valid SSL certificate
    - Redirect HTTP to HTTPS

## Future Enhancements

1. Admin Management
   - Create/edit/delete admin accounts
   - Role-based access control (RBAC)
   - Multiple admin levels

2. Advanced Features
   - Two-factor authentication (2FA)
   - Email notifications for new registrations
   - PDF report generation
   - Data analytics dashboard

3. Security
   - Implement refresh tokens
   - Add IP whitelisting
   - Session management
   - Activity logging

## Support

For issues or questions regarding the authentication system:
1. Check the troubleshooting section
2. Review the API endpoints documentation
3. Check browser console for errors
4. Check backend logs for server errors
