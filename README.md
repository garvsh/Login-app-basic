# Basic Login App using MERN Stack

This project is a basic login application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes functionality for user registration, authentication, and profile management.

## Features

- User Registration
- Email Verification
- User Authentication
- Login System
- OTP Generation and Verification
- User Profile Update
- Password Reset

## Routes

### POST Methods

- `/register`: Register a new user.
- `/registerMail`: Send a verification email after registration.
- `/authenticate`: Authenticate a user.
- `/login`: Login to the application.

### GET Methods

- `/user/:username`: Retrieve user information by username.
- `/generateOTP`: Generate a random OTP for the user.
- `/verifyOTP`: Verify the generated OTP.
- `/createResetSession`: Reset session variables.

### PUT Methods

- `/updateuser`: Update user profile information.
- `/resetPassword`: Reset the user's password.

