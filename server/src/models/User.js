const mongoose = require("mongoose");

const Schema = mongoose.Schema

const User = new Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        town: String,
        street: String
    },
    role: {
        type: String,
        default: 0 // 1 is administrator, 0 is a user
    }

});

module.exports = mongoose.model("User", User);