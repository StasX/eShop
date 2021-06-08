const express = require("express");
const user = require("./routes/user");
const product = require("./routes/product");

const app = express();

global._basedir = __dirname;

app.use(express.static("public"));

app.use(user, product);

module.exports = app;