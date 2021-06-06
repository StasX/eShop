const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.ObjectId,
        ref: "Category"
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Product", Product);