# Express JWT Authentication

This is a simple backend authentication project built with Node.js and Express.

## Features
- Express server
- JWT token generation
- Cookie-based authentication
- Token verification route

## Routes
- `/` → Generate JWT token and store in cookie
- `/read` → Verify token from cookie

## Installation

1. Clone the repository
git clone https://github.com/msoyabcode/express-jwt-auth.git

2. Install dependencies
npm install

3. Run the server
node app.js

Server runs on:
http://localhost:3000

## Tech Used
- Node.js
- Express.js
- jsonwebtoken
- cookie-parser
- bcrypt