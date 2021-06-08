const Product = require("../models/Product");


exports.get = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            throw new Error(err);
        }
        res.json({
            products
        });
    });
}

exports.add = (req, res) => {

}

exports.update = (req, res) => {

}