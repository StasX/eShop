const express = require("express");
const cookieParser = require("cookie-parser");
const cart = require("./routes/cart");
const category = require("./routes/category");
const order = require("./routes/order");
const product = require("./routes/product");
const user = require("./routes/user");

const app = express();

app.use(express.static("public"));
app.use(cookieParser());
app.use(cart, category, order, product, user);

module.exports = app;
