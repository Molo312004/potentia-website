# SETUP GUIDE FOR SPRING BOOT BACKEND

## Prerequisites
1. **Java JDK 17+** - Download from oracle.com or use OpenJDK
2. **MySQL Server** - Download from mysql.com
3. **Maven** - Download from maven.apache.org (or use IDE bundled version)

## Step-by-Step Setup

### 1. Create MySQL Database
Open MySQL Command Line or MySQL Workbench and run:
```sql
CREATE DATABASE potentia_scholarship;
```

### 2. Configure Database Credentials
Edit `src/main/resources/application.properties`:
```properties
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```

Replace:
- `your_mysql_username` - Your MySQL username (default is usually "root")
- `your_mysql_password` - Your MySQL password

### 3. Open Project in IDE (Optional but Recommended)
- Open IntelliJ IDEA or Eclipse
- Open this Backend folder as a Maven project
- Let IDE download dependencies

### 4. Build the Project
```bash
cd Backend
mvn clean install
```

This downloads all dependencies and builds the project (takes 2-5 minutes on first run).

### 5. Run the Backend
```bash
mvn spring-boot:run
```

OR in IDE, right-click on `ScholarshipBackendApplication.java` and select "Run".

**Expected Output:**
```
Started ScholarshipBackendApplication in 5.234 seconds
```

### 6. Verify Backend is Running
Open browser and visit: `http://localhost:8080/api/registrations/all`

You should see an empty JSON array `[]`

## Test the API

### Using cURL
```bash
curl -X POST http://localhost:8080/api/registrations/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "school": "Central High School"
  }'
```

### Using Postman
1. Create POST request to `http://localhost:8080/api/registrations/register`
2. Set header: `Content-Type: application/json`
3. Set body (raw JSON):
```json
{
  "fullName": "Jane Smith",
  "email": "jane@example.com",
  "phone": "8765432109",
  "school": "St. Mary's School"
}
```

## Frontend Configuration
The frontend is already configured to send data to `http://localhost:8080/api/registrations/register`

Make sure:
1. Backend is running on port 8080
2. Database is accessible
3. frontend/scholarship.html can reach the backend

## Troubleshooting

### "Connection refused" Error
- Make sure MySQL is running
- Check `application.properties` username/password

### "Database connection failed"
- Verify database `potentia_scholarship` exists
- Check MySQL is running: `mysql -u root`

### CORS Issues
- Backend already has CORS enabled for all origins
- Make sure you're using the exact URL: `http://localhost:8080`

### Port 8080 Already in Use
Edit `application.properties`:
```properties
server.port=8081
```

Then update frontend script.js to use port 8081 instead of 8080.

## Database Tables
After first run, the table `registrations` is automatically created with:
- id (auto-increment primary key)
- fullName (varchar)
- email (varchar, unique)
- phone (varchar)
- school (varchar)
- registration_time (datetime)

## Stopping the Backend
Press `Ctrl+C` in terminal or click Stop button in IDE.
