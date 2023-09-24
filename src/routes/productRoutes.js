const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            let folder = path.join(__dirname, "../../public/images/products")
            cb(null, folder)
        },
        filename: (req, file, cb) => {
            let imageName = "product_" + Date.now() + path.extname(file.originalname)
            req.body["image"] = imageName;
            cb(null, imageName)
        }
    }
)

//Middleware de Multer
const uploadFile = multer({ storage });

router.get("/detail/:idProduct", productController.detail);

router.get("/create", productController.create);

router.post("/create", uploadFile.single('image'), productController.creatingProcess);

module.exports = router;