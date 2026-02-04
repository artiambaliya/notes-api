const mongoose = require("mongoose");

const connectMongo = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo is connected!");
    } catch (err) {
        console.error("connection is failed!");
        process.exit(1)


    }
}


module.exports = connectMongo;