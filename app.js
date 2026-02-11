const express = require("express");
const notesRoutes = require("./routes/noteRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandling = require("./middlerwares/errorHandling");


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use("/api/notes", notesRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandling);



module.exports = app;