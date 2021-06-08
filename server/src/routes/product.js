const router = require("express").Router();
const productCtrl = require("../controllers/productCtrl");
const multer = require("multer");

const upload = multer({
    dest: `${__basedir}/uploads/`
});


// get all products
router.get("/", productCtrl.get);
// add product
router.put("/", upload.single('img'), productCtrl.add);
// update products
router.post("/", upload.single('img'), productCtrl.update);