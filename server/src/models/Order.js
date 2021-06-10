const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Order = new Schema({
    id: {
        type: Number,
        default: 0
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

const model = mongoose.model("Order", Order);

Order.pre("save", (next) => {
    model.findOneAndUpdate({
        _id: Order._id
    }, {
        $inc: {
            id: 1
        }
    }, (err) => {
        if (err) {
            throw new Error(err);
        }
        next();
    });
});

module.exports = model;