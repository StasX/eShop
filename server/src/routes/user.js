const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.post("/", userCtrl.login);

module.exports = router;