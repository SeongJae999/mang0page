"use strict";

// module
const express = require("express");
const app = express()

// routing
const home = require("./routes/home");

// application setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use : midlleware를 등록해주는 메서드

module.exports = app;

