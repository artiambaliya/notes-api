const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    heading : {
        type : String,
        required : true,
    },
    summary : {
        type : String,
        required : true,
    },
    isDeleted : {
        type : Boolean,
        default : false,
    }
},

{timestamps : true}
);

module.exports = mongoose.model("notes", noteSchema);