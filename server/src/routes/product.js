const router = require("express").Router();

const productCtrl = require("../controllers/productCtrl");

// get all products
router.get("/", productCtrl.get);
// add product
router.put("/", productCtrl.add);
// update products
router.post("/", productCtrl.update);