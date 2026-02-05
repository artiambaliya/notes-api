const NoteAPI = require("../models/notesModel");




const getNotes = async (req, res, next) => {

    try{
        const getData = await NoteAPI.find({isDeleted : true}) 
        return res.status(200).json(getData);
    }catch(err){
        next(err)
    }
}

module.exports = {
    getNotes,

}