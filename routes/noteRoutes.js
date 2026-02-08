const express = require("express");
const router = express.Router();
const validateId = require("../middlerwares/validateId");
const asyncHandler = require("../utils/asyncHandler")

const {
    getNotes,
    createNote,
    getNotesById,
    updateNote,
    deleteNote

} = require("../controller/noteController");


router.get("/", getNotes);

router.post("/", createNote)

router.get("/:id",validateId, getNotesById)

router.patch("/:id",validateId, updateNote)

router.delete("/:id",validateId, deleteNote)


module.exports = router;