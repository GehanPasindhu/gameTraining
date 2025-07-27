-- database.sql - Database schema
CREATE DATABASE IF NOT EXISTS game_dev_training CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE game_dev_training;

-- Admin table for secure login
CREATE TABLE admins (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,  -- Store hashed passwords
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses offered
CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    image_url TEXT,
    description TEXT,
    duration VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Student registrations
CREATE TABLE registrations (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20),
    CourseId INTEGER NOT NULL,
    message TEXT,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CourseId) REFERENCES courses(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Contact Us form submissions
CREATE TABLE contact_messages (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20),
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
