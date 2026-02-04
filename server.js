const app = require("./app");
require("dotenv").config();
const connectMongo = require("./db");


const PORT = process.env.PORT || 3000


connectMongo();


app.listen(PORT, () => console.log("server is running!"));