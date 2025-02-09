# TASK MANAGEMENT APP

## Introduction
This is a Task Management App built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to sign up, log in, and manage their tasks efficiently. Users can create, update, and delete tasks, helping them stay organized.

Key Features:
✅ User Authentication – Sign up & log in securely
✅ Task Management – Create, update, and delete tasks
✅ Modern UI – Built with React for a seamless user experience
✅ REST API – Backend powered by Node.js & Express
✅ Database – MongoDB for storing user and task data

This project simplifies task tracking and improves productivity! 🚀

## Project Type
Fullstack Project based on MERN Stack

## Deplolyed App
Frontend: https://brilliant-profiterole-484726.netlify.app/
Backend: https://kazam-ev-tech-3.onrender.com/
Database: mongodb+srv://<username>:<db_password>@cluster0.xfy5h.mongodb.net/

## Directory Structure
KAZAM-EV-TECH/
├─ kazam-backend/
  ├─ Connections
  ├─ Models
  ├─ Routes
  ├─ app.js
  ├─ package.json
  ├─ package-lock.json

├─ kazam-fsd/
   ├─ public
   ├─ src
      ├─ Components
        ├─ Home
      ├─ Pages
      ├─ Store
      ├─ App.js
      ├─ index.js
   ├─ package.json
   ├─ package-lock.json
   ├─ tailwind.config.js




## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features

- Signup
- Login
- Authentication
- Task Creation
- Task Updation
- Task Deletion

## design decisions or assumptions

1. Tech Stack
Frontend: React.js (for UI/UX)
Backend: Node.js with Express.js (for API development)
Database: MongoDB Atlas (for cloud storage)
Authentication: JSON Web Tokens (JWT) for secure login/signup

2. Architecture
MERN Stack for seamless integration
RESTful API for structured communication between frontend and backend
Modular Component Structure in React for scalability

3. State Management
React Context API or Redux to manage global state
Local Storage to store authentication tokens

4. Security
Password hashing using bcrypt.js
JWT-based authentication for user sessions
CORS and helmet.js for API security

5. Error Handling
Try-catch blocks in async functions
Custom error messages for better debugging

## Installation & Getting started

Prerequisites
Before running the project, make sure you have the following installed:

Node.js (Latest LTS version)
MongoDB Atlas or Local MongoDB
Git
VS Code or any code editor

1. Clone the Repository
git clone https://github.com/rushikesh226/Kazam-EV-Tech.git

cd Kazam-EV-Tech

2. Backend Setup (Express & MongoDB)
Navigate to the backend folder and install dependencies:

cd kazam-backend
npm install

3. Configure Environment Variables
Create a .env file in the kazam-backend folder and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
MongoDB Connection String:

f using MongoDB Atlas, get the connection string from your Atlas dashboard

4. Start the Backend Server

npm start
By default, the server runs on http://localhost:1000

5. Frontend Setup (React)
Navigate to the frontend folder and install dependencies:
cd ../kazam-fsd
npm install
REACT_APP_API_URL=http://localhost:3000

6. Start the Frontend Server
npm start
By default, the frontend runs on http://localhost:3000.

7. MongoDB Schema Overview
The project uses Mongoose models for MongoDB. The main schema files are in kazam-backend/models/.
User Model (models/User.js)
Task Model (models/Task.js)

8. API Testing (Postman or cURL)
You can use Postman or cURL to test API endpoints.

Login API Example

POST http://localhost:1000/api/v1/sign-in
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "123456"
}

Get Tasks API Example

GET http://localhost:1000/api/v1/tasks
Authorization: Bearer <your_token>

9. Deployment
Deploy Backend to Render/Vercel
Deploy Frontend to Netlify/Vercel
Update the files in frontend with the deployed API URL

## Usage
Sign Up (New User Registration)

Open the app in your browser (http://localhost:3000 if running locally).
Click on the Sign Up button.

Fill in the required details (Username, Email, Password) and submit.

After successful registration, you'll be redirected to the login page.

Example API Request (POST)
POST http://localhost:1000/api/v1/sign-up
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword"
}

Login (Existing Users)
Enter your email and password on the login page.
Click Login to authenticate.
On successful login, you will be redirected to the dashboard with your tasks.

Example API Request (POST)

POST http://localhost:1000/api/v1/sign-in
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}
Response: You will receive a JWT token which will be used for authorization in further requests.


2. Task Management ✅
Create a Task
Navigate to the Dashboard.
Click on Add Task and enter the title, description.
By default the status of your task will be false.
Click sub,it to add the task.
Example API Request (POST)

POST http://localhost:1000/api/v1/tasks
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "title": "Complete MERN Project",
  "description": "Finish the frontend and backend integration",
}

View All Tasks
Once logged in, the Dashboard will display all tasks assigned to you.
Tasks will be categorized based on status: All Tasks, Important Tasks, Completed Tasks, Incomplete Tasks.

Example API Request (GET)

GET http://localhost:5000/api/v1/tasks
Authorization: Bearer <your_token>

Update a Task
Click on the edit icon on the task div to edit its details.
Modify the title, description or both.
Click Update button to save changes.

Example API Request (PUT)

PUT http://localhost:5000/api/v1/tasks/:taskId
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "status": "completed"
}

Delete a Task
Click on the Delete button icon in the task div.
The task will be removed permanently.

Example API Request (DELETE)

DELETE http://localhost:5000/api/v1/tasks/:taskId
Authorization: Bearer <your_token>

3. Logout
Click on the Logout button in the sidebar.
Your session will be cleared, and you will be redirected to the login page.

4. API Testing via Postman or cURL
Use Postman or cURL to manually test API endpoints.
Include the Authorization: Bearer <your_token> header for authenticated requests.

5. Deployment Instructions
If deployed, replace http://localhost:1000 with your backend URL and http://localhost:3000 with your frontend URL.

## Example Credentials

Login using following credentials
username - rushi
password-xyz123


## Technology Stack

- Node.js
- Express.js
- MongoDB
- React.js
- Tailwind CSS
- axios
- jsonwebtoken
- mongoose
- bcryptjs
- @reduxjs/toolkit