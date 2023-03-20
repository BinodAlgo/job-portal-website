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

# MySQL Database

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

---

This will create a new database called "job_portal" and three tables: "users", "job_postings", and "job_applications". You can modify these queries as needed to fit the specific requirements of your job portal website.

# Server Configuration

---

Apache Server

---

# Programming Language

---

PHP( Hypertext Pre-processor) is a backend scripting language that works very well with HTML, CSS, Js on the frontend. Together with MySQL as database, it powers the 90% of websites hosted today in the internet.

---

# Next Steps

---

1.Create PHP scripts to handle user registration and login. These scripts should interact with the "users" table in your database to create new user accounts and authenticate users.

2.Implement a page to allow users to upload their resumes. This page should include a form for uploading the resume file and a PHP script to handle the file upload and save the file path to the "users" table in your database.

3.Create PHP scripts to handle job postings. These scripts should interact with the "job_postings" table in your database to create new job postings, display job postings on the website, and allow users to apply for jobs.

4.Implement a page to display job postings. This page should retrieve job postings from the "job_postings" table in your database and display them in a user-friendly way.

5.Create PHP scripts to handle job applications. These scripts should interact with the "job_applications" table in your database to allow users to submit job applications and view their application history.

6.Implement a page to display a user's job application history. This page should retrieve job applications from the "job_applications" table in your database and display them in a user-friendly way.

---

---

# Contribution

You are free to contribute to this project. See the guidelines below:

# Report bugs or issues

Feel free to report bugs or issues with code on this project.
