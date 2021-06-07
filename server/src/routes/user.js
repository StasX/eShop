const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

// login
router.post("/", userCtrl.login);
// register
router.put("/", userCtrl.register);

module.exports = router;