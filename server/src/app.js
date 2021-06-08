const express = require("express");

const app = express();

global._basedir = __dirname;

app.use(express.static("public"));