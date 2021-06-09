const router = require("express").Router();
const cartCtrl = require("../controllers/cartCtrl");

// get open cart
router.get("/cart", cartCtrl.getOpen);
// open cart
router.post("/cart", cartCtrl.open);
// update cart
router.put("/cart/:id", cartCtrl.update);
// close cart
router.get("/cart/:id", cartCtrl.close);

module.exports = router;