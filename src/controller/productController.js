const fs = require("fs");


const productController = {
    index: (req, res) => {
        const productsJSON = fs.readFileSync("./src/db/products.json", "utf-8");
        const productsObject = JSON.parse(productsJSON);

        res.render("index", { products: productsObject });
    },
    detail: (req, res) => {
        const productsJSON = fs.readFileSync("./src/db/products.json", "utf-8");
        const productsObject = JSON.parse(productsJSON);

        const id = req.params.idProduct;

        const productFound = productsObject.filter((product) => {
            return product.id == id;
        })

        res.render("detail", { product: productFound[0] })
    },
    create: (req, res) => {
        res.render("create")
    },
    creatingProcess: (req, res) => {
        const productsJSON = fs.readFileSync("./src/db/products.json", "utf-8");
        const productsObject = JSON.parse(productsJSON);

        console.log("images: ",req.body?.images)

        const newProduct = {
            "id": productsObject[productsObject.length-1]?.id + 1 || 0,
            "name": req.body?.name || "New Product",
            "price": req.body?.price || 105,
            "images": req.body?.images || ["product_default.png"],
            "description": req.body?.description || "Description....",
            "colors": req.body?.colors || ["#ababab"],
            "sizes": req.body?.sizes || ["s","xl"],
            "category": req.body?.category || "new"
        }

        console.log("NEW PRODUCT: ", newProduct)

        productsObject.push(newProduct)

        const productsString = JSON.stringify(productsObject, null, 2)
        fs.writeFileSync("./src/db/products.json", productsString);

        res.redirect("/")
    },
    cart: (req, res) => {
        const cart = req.query;

        res.send(cart)
    },
    edit: (req, res) => {
        res.render("create")
    },
    editingProcess: (req, res) => {

    }
}

module.exports = productController;