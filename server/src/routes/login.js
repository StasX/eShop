const router = require("express").Router();
const loginCtrl = require("../controllers/userCtrl");

router.post("/", loginCtrl);

module.exports = router;