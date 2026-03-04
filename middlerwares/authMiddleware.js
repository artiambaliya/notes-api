const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startWith("Barear")){
        return res.status(401).json({ message : "no token" });
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);     //authenctication

        req.user = decoded.id;

        next();

    }catch(error){
        res.status(401).json({ message : "invalid token"});
    }
};

module.exports = protect;