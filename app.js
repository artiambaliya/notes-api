const express = require("express");
const notesRoutes = require("./routes/noteRoutes");
const errorHandling = require("./middlerware/errorHandling");


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use("/api/notes", notesRoutes);
app.use(errorHandling);



module.exports = app;