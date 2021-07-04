const router = require("express").Router();
const productCtrl = require("../controllers/productCtrl");
const multer = require("multer");

const upload = multer({
    dest: `${process.env.dir} + uploads/`
});


// get all products
router.get("/product", productCtrl.get);
// get number of products
router.get("/product/total", productCtrl.total);

// add product
router.put("/product", upload.single('img'), productCtrl.add);

// update products
router.post("/product/:id", upload.single('img'), productCtrl.update);

module.exports = router;
