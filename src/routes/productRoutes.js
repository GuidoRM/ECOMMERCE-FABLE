const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../../public/images/products");
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let imageName = "product_" + Date.now() + path.extname(file.originalname);
        req.body["images"] = req.body["images"] || []; // Inicializa un array si aún no existe
        req.body["images"].push(imageName); // Agrega el nombre del archivo al array
        cb(null, imageName);
    }
});


// Middleware de Multer para subir múltiples archivos
const uploadFiles = multer({ storage }).array('images', 10); 
// 'images' es el nombre del campo de archivo en el formulario


router.get("/detail/:idProduct", productController.detail);

router.get("/create", productController.create);

router.post("/create", (req, res, next) => {
    // Utiliza el middleware para subir múltiples archivos
    uploadFiles(req, res, (err) => {
        if (err) {
            // Handle error de carga de archivos aquí, si es necesario
            return res.status(500).json({ error: err.message });
        }
        // Llama a la función de controlador para procesar los datos del formulario
        productController.creatingProcess(req, res, next);
    });
});

router.get("/cart", productController.cart);

module.exports = router;