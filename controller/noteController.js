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

    if(!heading || !summary){
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

    try{
        const getId = await NoteAPI.findOne({
            _id : req.params.id
        });

        if(!getId){
            const error = new Error("bad requrest");
            error.status = 400;
            return next(error);
        }

        return res.status(200).json(getId);
    }catch(err){
        next(err)
    }
}

module.exports = {
    getNotes,
    createNote,
    getNotesById

}