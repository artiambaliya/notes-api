const User = require("../models/userModel");

const registerUser = async (req, res, next) => {

    try{
        const { name, email, password } = req.body

        if(!name || !email || !password){
            const error = new Error("All fildes are required");
            error.status = 400;
            throw error;
        }

        const existingUser = await User.findOne({ email })

        if(existingUser){
            const error = new Error("User alreay exists");
            error.status = 400;
            throw error;
        }

        const user = await User.create({
            name, 
            email,
            password,
        });

        return res.status(201).json({
            id : user._id,
            name : user.name,
            email : user.email,
        });

    }catch(err){
        next(err);
    }
}


module.exports = { registerUser }