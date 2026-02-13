const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res, next) => {

    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            const error = new Error("All fildes are required");
            error.status = 400;
            throw error;
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const error = new Error("User alreay exists");
            error.status = 400;
            throw error;
        }

        //hash password 

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashPassword,
        });

        return res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
        });

    } catch (err) {
        next(err);
    }
}


const loginUser =  async(req, res, next) => {

    const {email, password} = req.body;

    if(!email || !password){
        const error = new Error("email and password required");
        error.status = 400;
        throw error;
    }

    const user = await User.findOne({ email });

    if(!user){
        const error = new Error("invalid credantials");
        error.status = 404;
        throw error;
    }

    //compare password

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        const error = new Error("invalid credantials");
        error.staus = 401;
        throw error;
    }

    return res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email
    });

    

}



module.exports = {
    registerUser,
    loginUser,
}