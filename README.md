# Syntecxhub User Management System

📌 **Overview**

Syntecxhub User Management System is a RESTful User Management API built using Node.js, Express.js, MongoDB, and Mongoose. It provides secure API endpoints for creating, retrieving, updating, and deleting users with authentication, password hashing, validation, and centralized error handling.

This project was developed as **Project 1 – User Management System** during my Web Development Internship at **Syntecxhub**.

## 🌐 Live Demo

🚀 **View User Management API**

## 📂 GitHub Repository

💻 **View Source Code on GitHub**

## ✨ Features

➕ Create new users  
👥 Retrieve all users  
🔎 Retrieve a user by ID  
✏️ Update user details  
🗑️ Delete users  
🔐 Basic Authentication for protected API endpoints  
🔒 Password hashing using bcrypt  
☁️ MongoDB Atlas database integration  
✅ Mongoose schema validation  
📧 Unique email validation  
⚠️ Centralized error handling  
🔑 Environment variables for sensitive configuration  
🌐 RESTful API architecture  
🧪 API testing using Postman  

## 🛠️ Technologies Used

### Backend

🟢 Node.js  
🚂 Express.js  

### Database

🍃 MongoDB Atlas  
📦 Mongoose  

### Security & Configuration

🔐 bcrypt  
🔑 dotenv  

### Development & Testing

🧑‍💻 Visual Studio Code  
📮 Postman  
📦 npm  
🔄 Nodemon  
🔧 Git  
🐙 GitHub  

## 🔐 Authentication & Security

The API uses **Basic Authentication** to protect user management endpoints.

Passwords are securely hashed using **bcrypt** before being stored in the database.

Security measures implemented include:

- Password hashing using bcrypt
- Passwords excluded from API responses
- Basic Authentication for protected endpoints
- API credentials stored using environment variables
- `.env` excluded from Git using `.gitignore`
- Unique email validation

## 📋 Validation & Error Handling

The API handles various validation and error scenarios, including:

- Missing required fields
- Invalid email addresses
- Passwords shorter than 8 characters
- Duplicate email addresses
- Invalid MongoDB user IDs
- Non-existent users
- Missing authentication
- Invalid authentication credentials
- Malformed JSON requests

A centralized error-handling middleware is used to provide consistent API error responses.

## 📁 Project Structure

```text
Syntecxhub_User_Management_System/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## 🚀 Installation

Follow these steps to run the User Management API locally.

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the project directory

```bash
cd Syntecxhub_User_Management_System
```

### 3. Install dependencies

```bash
npm install
```

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
BASIC_AUTH_USERNAME=your_api_username
BASIC_AUTH_PASSWORD=your_api_password
```

⚠️ Do not commit the `.env` file to GitHub.

## ▶️ Run the Project

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The API runs at:

```text
http://localhost:5000
```

## 🌐 API Endpoints

All user management endpoints require **Basic Authentication**.

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users` | Create a user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a user by ID |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

## ➕ Create User

**POST**

```text
/api/users
```

Request body:

```json
{
  "name": "Maneesha",
  "email": "maneesha@example.com",
  "password": "TestPassword123"
}
```

## ✏️ Update User

**PUT**

```text
/api/users/:id
```

Example request body:

```json
{
  "name": "Maneesha Updated",
  "email": "maneesha.updated@example.com"
}
```

## 🔐 Using Authentication

Configure the credentials in `.env`:

```env
BASIC_AUTH_USERNAME=your_api_username
BASIC_AUTH_PASSWORD=your_api_password
```

In Postman:

**Authorization → Basic Auth**

Enter the configured username and password before sending protected API requests.

## 🧪 Testing

The API was tested using **Postman** for:

- Create user
- Get all users
- Get user by ID
- Update user
- Delete user
- Authentication failures
- Validation errors
- Duplicate email handling

## ☁️ Database

The application uses **MongoDB Atlas** for storing user data.

Mongoose is used to:

- Define the User schema
- Validate user data
- Enforce unique email addresses
- Interact with the MongoDB database

## 🎯 Project Objectives

The main objectives of this project were to:

- Build a RESTful API using Node.js and Express.js
- Implement CRUD operations
- Connect an application to MongoDB Atlas
- Work with Mongoose schemas and validation
- Implement Basic Authentication
- Secure passwords using bcrypt
- Handle API errors centrally
- Manage sensitive configuration using environment variables
- Test REST APIs using Postman

## 🎓 Internship Details

**Internship:** Web Development Internship  
**Organization:** Syntecxhub  
**Project:** Project 1 – User Management System  
**Technology:** Node.js, Express.js, MongoDB, Mongoose

## 🔗 Links

🌐 **Live Demo:** `<YOUR_DEPLOYED_API_URL>`

💻 **GitHub Repository:** `<YOUR_GITHUB_REPOSITORY_URL>`

👩‍💻 **GitHub Profile:** https://github.com/YerraboinaManeesha

## 👤 Author

**Maneesha Yerraboina**

MSc Computer Science Graduate | Web Development Intern