const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get("/detail/:idProduct", productController.detail);

router.get("/create", productController.create);

router.post("/create", productController.creatingProcess);

module.exports = router;