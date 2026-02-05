const express = require("express");
const route = express.Router();
const {getNotes} = require("../controller/noteController");

route.get("/", getNotes);


module.exports = route;