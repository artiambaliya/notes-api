const express = require("express");
const route = express.Router();
const {
    getNotes,
    createNote,
    getNotesById,

} = require("../controller/noteController");


route.get("/", getNotes);

route.post("/", createNote)

route.get("/:id", getNotesById)


module.exports = route;