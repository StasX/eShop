const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

// login
router.post("/", userCtrl.login);
// register
router.put("/", userCtrl.register);
// logout
router.get("/", userCtrl.logout);

module.exports = router;