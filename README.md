# Note API 

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

controller/
models/
routes/
utils/
middleware/
app.js
server.js


## Installation

```bash
git clone <your-repo-link>
cd project-name
npm install
```

## Run project

npm start

server runs on :  https://localhost:8001


## Endpoints

GET / api/notes    -> Get All Notes
POST / api/notes    -> Create Note
GET / api/notes/:id    -> Get Note by ID
PATCH / api/notes/:id    -> Update Note
DELETE / api/notes/:id    -> Delete Note (Soft Delete)


