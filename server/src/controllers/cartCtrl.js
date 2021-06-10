const Cart = require("../models/Cart");

// get opened cart
exports.getOpen = (req, res) => {
    Cart.find({
        client: req.id,
        status: 1
    }, {
        sort: {
            createdAt: -1
        }
    }, (err, cart) => {
        if (err) {
            throw new Error(err);
        }
        res.json({
            cart
        });
    })
}

// Open new cart
exports.open = (req, res) => {
    const client = req.userId;
    const products = req.products;
    const newCart = new Cart({
        client,
        products
    });
    newCart.save((err, cart) => {
        if (err) {
            throw new Error(err);
        }
        res.status(201).json({
            id: cart._id
        }).end();
    });
}

// Update cart
exports.update = (req, res) => {
    const _id = req.params.id;
    const products = req.body.products;
    Cart.updateOne({
        _id
    }, {
        $set: {
            products
        }
    }, (err) => {
        if (err) {
            throw new Error(err);
        }
        res.status(202).end();
    });
}

// Close cart
exports.close = (req, res) => {
    const _id = req.params.id;
    Cart.updateOne({
        _id
    }, {
        $set: {
            status: 0
        }
    }, (err) => {
        if (err) {
            throw new Error(err);
        }
        res.status(202).end();
    });
}