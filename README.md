# Job Portal Website

# Overview

---

General Overview of Website

# Features

---

Features of Website

Employer profiles and job listings
Candidate profiles and job applications
Resume uploading and management
Messaging and communication tools
Job alerts and notifications
Installation
Provide instructions for how to install and run your job portal website. This may include details on:

---

# System requirements (e.g., server, database, programming language)

---

Database Configuration
-- Create job_portal database
CREATE DATABASE job_portal;

-- Use job_portal database
USE job_portal;

-- Create users table
CREATE TABLE users (
id INT(11) NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(100) NOT NULL,
registration_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

-- Create job_postings table
CREATE TABLE job_postings (
id INT(11) NOT NULL AUTO_INCREMENT,
job_title VARCHAR(100) NOT NULL,
company_name VARCHAR(100) NOT NULL,
job_description TEXT NOT NULL,
location VARCHAR(100) NOT NULL,
salary DECIMAL(10, 2) NOT NULL,
date_posted TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

-- Create job_applications table
CREATE TABLE job_applications (
id INT(11) NOT NULL AUTO_INCREMENT,
user_id INT(11) NOT NULL,
job_id INT(11) NOT NULL,
resume_path VARCHAR(255) NOT NULL,
cover_letter TEXT,
date_submitted TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (job_id) REFERENCES job_postings(id)
);

This will create a new database called "job_portal" and three tables: "users", "job_postings", and "job_applications". You can modify these queries as needed to fit the specific requirements of your job portal website.

---

# Contribution

You are free to contribute to this project. See the guidelines below:

# Report bugs or issues

Feel free to report bugs or issues with code on this project.
