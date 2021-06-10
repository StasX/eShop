const router = require("express").Router();
const orderCtrl = require("../controllers/orderCtrl");

// get last order
router.get("/order", orderCtrl.get);

// add order
router.post("/order", orderCtrl.add);

module.exports = router;