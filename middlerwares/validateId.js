const mongoose = require("mongoose");

const validateId = (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        const error = new Error("invalid id");
        error.status = 400;
        return next(error);
    }
    next();
}


module.exports = validateId;