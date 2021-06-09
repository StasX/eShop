const Order = require("../models/Order");

// get latest order
exports.get = (req, res) => {
    Order.findOne({
        client: {
            id: req.userId
        }
    }, {
        sort: {
            date: -1
        }
    }, (err, order) => {
        if (err) {
            throw new Error(err);
        }
        res.json({
            order
        });
    });
}
// create new order
exports.add = (req, res) => {
    const clientId = req.userId;
    const body = req.body;
    const cart = body.cart;
    const price = body.price;
    const card = body.card;
    const shippingDate = body.date;
    const town = body.town;
    const street = body.street;

    const newOrder = new Order({
        id: {
            type: Number,
            default: 1
        },
        cart,
        client: clientId,
        price,
        card,
        shipping: {
            date: shippingDate,
            address: {
                town,
                street
            }
        }
    });
    newOrder.save((err) => {
        if (err) {
            throw new Error(err);
        }
        res.status(201).end();
    });
}