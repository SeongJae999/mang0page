"use strict";

// module
const express = require("express");
const app = express()

// routing
const home = require("./src/routes/home");

// application setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use : midlleware를 등록해주는 메서드

module.exports = app;

