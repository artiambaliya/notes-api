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
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "user",
    },
},

{timestamps : true}
);

module.exports = mongoose.model("notes", noteSchema);