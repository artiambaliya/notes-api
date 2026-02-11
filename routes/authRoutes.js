const express = require("express");
const router = express.router();
const registerUser = require("../controller/authController");


router.post("/register", registerUser);


module.exports = registerUser;