const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controller");

router.get("/products", index);
router.get("/product/:id", find);
router.put("/products/:id", update);
router.delete("/products/:id", destroy);
router.post("/products", create);

module.exports = router;
