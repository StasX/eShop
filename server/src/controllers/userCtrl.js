const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.login = (req, res) => {
    const email = req.body.mail;
    const pass = req.body.pass;
    User.find({
        email
    }, (err, users) => {
        if (err) throw new Error(err);
        if (users.length == 1 && bcrypt.compareSync(pass, users[0].password)) {
            const user = users[0];

            const role = {
                role: user.role,
            }

            const data = Object.assign({
                name: `${user.firstname} ${user.lastname}`,
                street: user.street,
                city: user.city,
            }, role);

            const token = jwt.sign(Object.assign({
                id: user._id

            }, role), key, {
                algorithm: "RS256",
                expiresIn: 30 * 60,
            });

            res.cookie("SESSID", token).json(data);
        } else {
            res.code(400).end();
        }
    })
}

exports.logout = (req, res) => {
    res.clearCookie("SESSID").status(200).redirect("/");
}

exports.register = (req, res) => {
    const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.mail;
    const pass = req.body.pass;
    const town = req.body.town;
    const street = req.body.street;
    const newUser = new User({
        _id: id,
        firstName,
        lastName,
        email,
        password: pass,
        address: {
            town,
            street
        }
    });
    newUser.save((err) => {
        if (err) {
            res.status(400).end();
            throw new Error(err);
        }
        res.status(201).redirect("/");
    });
}
