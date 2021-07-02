const router = require("express").Router();
const categoryCtrl = require("../controllers/categoryCtrl");

// get categories
router.get("/category", categoryCtrl.get);
// add category
router.post("/category", categoryCtrl.add);
// update category
router.post("/category/:id", categoryCtrl.update);

module.exports = router;
