# 🚀 Note API 

A backend Notes API built using **Node.js**, Express, MongoDB.

This project demonstartes REST API architecture, authentication, async error handling, protected routes.


## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Create Note
- Get All Notes
- Update Note
- Soft Delete Note
- Async Handler Middleware
- Centralized Error Handling
- MongoDB with Mongoose


## Authentication

This API uses JWT (JSON Web Token) for authentication.
After login, the server returns a token which must be sent in the request header.
Example:
Authorization: Bearer YOUR_TOKEN
Protected routes require this token to access notes



## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Javascript


## Project structure


project/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── app.js
└── server.js



## ⚙️ Installation

```bash
git clone <your-repo-link>
cd notes-api
npm install
```

## Run project

```bash
npm start
server runs on :  http://localhost:8001
```

## 📌 API Endpoints


## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/auth/register     |register user |
| POST   | /api/auth/login        |login user  |


## notes (protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/notes       | Get all notes |
| POST   | /api/notes       | Create note |
| GET    | /api/notes/:id   | Get note by ID |
| PATCH  | /api/notes/:id   | Update note |
| DELETE | /api/notes/:id   | Soft delete note |


