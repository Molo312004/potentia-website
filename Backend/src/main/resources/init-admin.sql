-- Initialize Admin Table
INSERT INTO admins (username, password, email, created_at, last_login, active) 
VALUES (
    'anung',
    '$2a$10$slYQmyNdGzin7olVN/ye2OPST9/PgBkqquzi.Oy6IUgO7UBcc5nz2', -- bcrypt hash of 'test1234'
    'admin@potentia.com',
    NOW(),
    NULL,
    true
)
ON DUPLICATE KEY UPDATE
    username=VALUES(username);
