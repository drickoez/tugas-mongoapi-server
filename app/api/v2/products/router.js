const express = require("express");
const router = express();
const productController = require("../products/controller");

router.get("/products", productController.index);

module.exports = router;
