# 🚀 Note API 

A backend Notes API built using **Node.js**, Express, MongoDB.

This project demonstartes REST API structure, async error handling, and soft delete logic.


## Features

- Create Note
- Get All Notes
- Get Notes By ID
- update Notes
- Soft Delete Notes
- Async Handler Middleware
- Centralized Error Handling
- MongoDB with Mongoose

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
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

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/notes       | Get all notes |
| POST   | /api/notes       | Create note |
| GET    | /api/notes/:id   | Get note by ID |
| PATCH  | /api/notes/:id   | Update note |
| DELETE | /api/notes/:id   | Soft delete note |

