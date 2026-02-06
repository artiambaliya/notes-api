const express = require("express");
const router = express.Router();
const {
    getNotes,
    createNote,
    getNotesById,
    updateNote,
    deleteNote


} = require("../controller/noteController");


router.get("/", getNotes);

router.post("/", createNote)

router.get("/:id", getNotesById)

router.patch("/:id", updateNote)

router.delete("/:id", deleteNote)


module.exports = router;