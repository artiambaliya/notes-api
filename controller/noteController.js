const NoteAPI = require("../models/notesModel");
const asyncHandler = require("../utils/asyncHandler");



const getNotes = asyncHandler(async (req, res) => {

    const notes = await NoteAPI.find({ user: req.user })
    return res.status(200).json(notes);

});


const createNote = asyncHandler(async (req, res) => {

    const { heading, summary } = req.body;

    if (!heading || !summary) {
        const error = new Error("heading and summary are required");
        error.status = 400;
        throw error
    };

    const data = await NoteAPI.create({
        heading,
        summary,
        user: req.user,
    });

    return res.status(201).json(data)
});


const getNotesById = asyncHandler(async (req, res) => {

    const getId = await NoteAPI.findOne({
        _id: req.params.id,
        isDeleted: false
    });

    if (!getId) {
        const error = new Error("Note not found");
        error.status = 404;
        throw error
    }

    return res.status(200).json(getId);
})


const updateNote = asyncHandler(async (req, res) => {

    const { heading, summary } = req.body;

    if (!heading || !summary) {
        const error = new Error("bad request");
        error.status = 400;
        throw error
    }

    const update = await NoteAPI.findOneAndUpdate(
        { _id: req.params.id, user: req.user },
        { heading, summary },
        { new: true }
    )

    if (!update) {
        const error = new Error("note not found");
        error.status = 404;
        throw error
    }

    return res.status(201).json(update);

});


const deleteNote = asyncHandler(async (req, res) => {

    const result = await NoteAPI.findOne({
        _id: req.params.id,
        user: req.user
    });

    if (!result) {
        const error = new Error("note not found");
        error.status = 404;
        throw error
    }

    await result.deleteOne();

    return res.status(201).json(removeNote);

})


module.exports = {
    getNotes,
    createNote,
    getNotesById,
    updateNote,
    deleteNote

}