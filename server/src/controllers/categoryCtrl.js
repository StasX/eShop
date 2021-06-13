const Category = require("../models/Category");

exports.get = (req, res) => {
    Category.find({}, (err, categories) => {
        if (err) {
            throw new Error(err);
        }
        res.json({
            category: categories
        });
    });
}

exports.add = (req, res) => {
    const name = req.body.name;
    const newCategory = new Category({
        name
    });
    newCategory.save((err, category) => {
        if (err) {
            throw new Error(err);
        }
        res.status(201).json({
            category
        });
    });
}

exports.update = (req, res) => {
    const name = req.body.name;
    const id = req.params.id;
    Category.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            name
        }
    }, (err) => {
        if (err) {
            throw new Error(err);
        }
        res.status(202).end();
    });
}
