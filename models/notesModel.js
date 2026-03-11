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
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "user",
    },
},

{timestamps : true}
);

module.exports = mongoose.model("notes", noteSchema);