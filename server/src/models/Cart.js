const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Cart = new Schema({
    client: {
        id: Schema.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    products: [{
        id: Schema.ObjectId,
        ref: "Product"
    }]
});

module.exports = mongoose.model("Cart", Cart);