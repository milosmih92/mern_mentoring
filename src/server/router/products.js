const express = require('express')
const products = require("../handlers/products");
const router = express.Router()

// GET all products
router.get("/", products.getProducts);

module.exports = router;
