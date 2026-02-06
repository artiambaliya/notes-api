const express = require("express");
const route = express.Router();
const {
    getNotes,
    createNote,
    getNotesById,
    updateNote,
    deleteNote


} = require("../controller/noteController");


route.get("/", getNotes);

route.post("/", createNote)

route.get("/:id", getNotesById)

route.patch("/:id", updateNote)

route.delete("/:id", deleteNote)


module.exports = route;