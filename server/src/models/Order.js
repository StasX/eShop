const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Order = new Schema({
    id: {
        type: Number,
        default: 1
    },
    cart: {
        id: Schema.Types.ObjectId,
        ref: "Cart"
    },
    client: {
        id: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now
    },
    price: Number,
    card: Number,
    shipping: {
        date: Date,
        address: {
            town: String,
            street: String
        }
    }
});

module.exports = mongoose.model("Order", Order);