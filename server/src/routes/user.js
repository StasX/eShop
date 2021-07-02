const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

// login
router.post("/user", userCtrl.login);

// register
router.put("/user", userCtrl.register);

// logout
router.get("/user", userCtrl.logout);

module.exports = router;
