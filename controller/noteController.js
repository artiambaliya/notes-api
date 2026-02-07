const NoteAPI = require("../models/notesModel");



const getNotes = async (req, res, next) => {

    try {
        const getData = await NoteAPI.find({ isDeleted: false })
        return res.status(200).json(getData);
    } catch (err) {
        next(err)
    }
}


const createNote = async (req, res, next) => {

    const { heading, summary } = req.body;

    if (!heading && !summary) {
        const error = new Error("heading and summary are required");
        error.status = 400;
        return next(error);
    }

    try {
        const data = await NoteAPI.create({
            heading,
            summary,
        });

        return res.status(201).json(data)
    } catch (err) {
        next(err)
    }
}


const getNotesById = async (req, res, next) => {

    try {
        const getId = await NoteAPI.findOne({
            _id: req.params.id,
            isDeleted: false
        });

        if (!getId) {
            const error = new Error("try again");
            error.status = 400;
            return next(error);
        }

        return res.status(200).json(getId);
    } catch (err) {
        next(err)
    }
}


const updateNote = async (req, res, next) => {

    const { heading, summary } = req.body;

    if (!heading && !summary) {
        const error = new Error("bad request");
        error.status = 400;
        return next(error);
    }

    try {

        const update = await NoteAPI.findByIdAndUpdate(req.params.id,
            { $set: { heading, summary } },
            { new: true }
        )

        if (!update) {
            const error = new Error("note not founded");
            error.status = 404;
            return next(error);
        }

        return res.status(200).json(update);
    } catch (err) {
        next(err);
    }

}


const deleteNote = async (req, res, next) => {

    try {
        const removeNote = await NoteAPI.findByIdAndUpdate(req.params.id,
            { isDeleted: true },
            { new: true }
        );


        if(!removeNote){
            const error = new Error("note not founded");
            error.status = 404;
            return next(error);
        }

        return res.status(200).json(removeNote);
    } catch (err) {
        next(err);
    }

}


module.exports = {
    getNotes,
    createNote,
    getNotesById,
    updateNote,
    deleteNote


}