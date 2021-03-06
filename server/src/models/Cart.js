const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Cart = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    status: {
        type: Number,
        default: 1 // 0 is closed ; 1 is open
    }
});

module.exports = mongoose.model("Cart", Cart);
