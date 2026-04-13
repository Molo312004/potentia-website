# Potentia Scholarship Platform - Setup Guide

## Prerequisites

- Java 17 or higher
- MySQL Server (local or remote)
- Maven 3.8.1 or higher
- Modern web browser

## Step-by-Step Setup

### 1. Database Setup

#### Option A: Using MySQL Command Line

1. Open MySQL Command Line Client
   ```bash
   mysql -u root -p
   ```

2. Enter your MySQL root password

3. Execute the schema script:
   ```sql
   SOURCE path/to/Backend/src/main/resources/schema.sql;
   ```

4. Verify tables were created:
   ```sql
   USE potentia_scholarship;
   SHOW TABLES;
   ```

#### Option B: Using MySQL Workbench

1. Open MySQL Workbench
2. Connect to your MySQL Server
3. Create new query tab
4. Open and execute `schema.sql`
5. Verify "admins" and "registrations" tables exist

#### Option C: Spring Boot Auto-Creation

The application will automatically create tables if:
- `spring.jpa.hibernate.ddl-auto=update` is set (it is in application.properties)
- However, initial data won't be inserted, so you need to run the init-admin.sql script

### 2. Database Configuration

Update `Backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/potentia_scholarship
spring.datasource.username=root
spring.datasource.password=your_password
spring.datasource.port=3306
```

Change:
- `your_password` - your MySQL root password
- `localhost` - if database is on another server
- `3306` - if MySQL runs on different port

### 3. Backend Setup

#### Build Backend

```bash
cd Backend
mvn clean install
```

Expected output:
```
[INFO] BUILD SUCCESS
[INFO] Total time: XX.XXX s
[INFO] Finished at: YYYY-MM-DDTHH:MM:SS±XX:XX
```

#### Initial Data

After first run, if default admin is not created, manually run in MySQL:

```sql
USE potentia_scholarship;

INSERT INTO admins (username, password, email, created_at, active) 
VALUES (
    'anung',
    '$2a$10$slYQmyNdGzin7olVN/ye2OPST9/PgBkqquzi.Oy6IUgO7UBcc5nz2',
    'admin@potentia.com',
    NOW(),
    true
);
```

### 4. Run Backend

```bash
cd Backend
mvn spring-boot:run
```

You should see:
```
Started ScholarshipBackendApplication in X.XXX seconds
```

Backend is running on: **http://localhost:8080**

### 5. Verify Backend is Running

In browser or terminal, visit:
```
http://localhost:8080/api/registrations/all
```

You should get an error asking for authorization (which is expected).

### 6. Frontend Setup

No special setup needed! Just open a browser and navigate to:
```
file:///path/to/Frontend/index.html
```

Or use a simple HTTP server:

```bash
cd Frontend
python -m http.server 8000
```

Then visit: **http://localhost:8000**

### 7. Test the System

#### Test User Registration

1. Open index.html
2. Click "Apply for Scholarship Test"
3. Fill in the form:
   - Full Name: John Doe
   - Email: john@example.com
   - Phone: 9876543210
   - School: DPS School
4. Click "Register & Continue"
5. See success message

#### Verify Registration in Database

```sql
USE potentia_scholarship;
SELECT * FROM registrations;
```

#### Test Admin Login

1. Back on index.html
2. Click "Admin Login" in navbar
3. Enter:
   - Username: `anung`
   - Password: `test1234`
4. Click "Login"
5. You'll see admin dashboard with all registrations

#### Verify Admin Login in Database

```sql
USE potentia_scholarship;
SELECT id, username, email, last_login, active FROM admins;
```

## Troubleshooting

### Backend won't start

**Error: "Unable to connect to MySQL"**
- Check MySQL is running: `mysqld --version`
- Check database credentials in application.properties
- Check MySQL port (default: 3306)

**Error: "Class com.mysql.cj.jdbc.Driver not found"**
- Ensure MySQL Connector is in pom.xml
- Run: `mvn clean install`

**Error: "Port 8080 already in use"**
- Kill process on port 8080
- Or change port in application.properties:
  ```properties
  server.port=8081
  ```

### Frontend issues

**"Error connecting to server"**
- Backend not running on http://localhost:8080
- Check backend console for errors
- Check browser console (F12) for CORS errors

**"Invalid username or password" (always fails)**
- Check admin credentials (username: `anung`, password: `test1234`)
- Check database has admin user:
  ```sql
  SELECT * FROM admins WHERE username='anung';
  ```

**Data not showing in admin dashboard**
- Check registrations table has data:
  ```sql
  SELECT COUNT(*) FROM registrations;
  ```
- Check JWT token is valid (check browser console)

### Database issues

**Error: "Authentication failed"**
- Check MySQL root password
- Verify username and password in application.properties
- Try: `mysql -u root -p` to test connection manually

**Error: "Database not found"**
- Database wasn't created
- Run schema.sql manually
- Or check spring.jpa.hibernate.ddl-auto is set to "update" or "create"

## Configuration Files

### Backend

- **application.properties** - Database, JWT, logging settings
- **pom.xml** - Dependencies and build configuration
- **SECURITY.md** - Security documentation

### Frontend

- **index.html** - Main page with login modal
- **admin-dashboard.html** - Admin dashboard
- **style.css** - Styling for all pages
- **script.js** - JavaScript functionality

## Directory Structure

```
Potentia Website/
├── Backend/
│   ├── pom.xml
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/potentia/scholarship/
│   │   │   │   ├── controller/
│   │   │   │   ├── dto/
│   │   │   │   ├── entity/
│   │   │   │   ├── repository/
│   │   │   │   ├── security/
│   │   │   │   ├── service/
│   │   │   │   ├── util/
│   │   │   │   └── ScholarshipBackendApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       ├── schema.sql
│   │   │       └── init-admin.sql
│   │   └── test/
│   ├── SECURITY.md
│   ├── SETUP.md
│   ├── README.md
│   └── target/
├── Frontend/
│   ├── index.html
│   ├── admin-dashboard.html
│   ├── scholarship.html
│   ├── script.js
│   ├── style.css
│   └── images/
└── potentia.txt
```

## Performance Tips

1. **Add Database Indexes**
   - Already included in schema.sql
   - Improves query speed for registrations

2. **Enable Compression**
   - Add to application.properties:
     ```properties
     server.compression.enabled=true
     ```

3. **Connection Pooling**
   - HikariCP is included by default
   - Good for production use

4. **Caching**
   - Consider Spring Cache for static data
   - Future enhancement

## Security Checklist

- [ ] Default admin password changed
- [ ] JWT secret changed from default
- [ ] HTTPS enabled (for production)
- [ ] Database password is strong
- [ ] CORS restricted to known domains
- [ ] Database backups scheduled
- [ ] Logging and monitoring enabled

## Next Steps

1. **Deployment**
   - Build JAR: `mvn clean package`
   - Deploy to server
   - Configure production database

2. **Scaling**
   - Multiple backend instances
   - Load balancing
   - Database replication

3. **Enhancements**
   - Email notifications
   - PDF report generation
   - Admin dashboard analytics
   - Multiple admin levels

## Support Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Security](https://spring.io/projects/spring-security)
- [JWT (JSON Web Token)](https://jwt.io/)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## Contact

For issues or questions:
1. Check troubleshooting section
2. Review log files
3. Check browser developer console (F12)
4. Review backend console output
