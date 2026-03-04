const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser } = require("../controller/authController");
    
const protect = require("../middlerwares/authMiddleware");
const { getNotes } = require("../controller/noteController");


router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/notes", protect, getNotes)

module.exports = router;