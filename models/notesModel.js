const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    heading : {
        typeof : String,
        required : true,
    },
    summary : {
        typeof : String,
        require : true,
    }
},

{timestamps : true}
);

module.exports = mongoose.model("notes", noteSchema);