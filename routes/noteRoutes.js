const express = require("express");
const router = express.Router();
const validateId = require("../middlerwares/validateId");
const protect = require("../middlerwares/authMiddleware");

const {
    getNotes,
    createNote,
    getNotesById,
    updateNote,
    deleteNote

} = require("../controller/noteController");


router.get("/", protect, getNotes);

router.post("/", protect, createNote)

router.get("/:id",validateId, getNotesById)

router.patch("/:id",validateId, updateNote)

router.delete("/:id",validateId, deleteNote)


module.exports = router;