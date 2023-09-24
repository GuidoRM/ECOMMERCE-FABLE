const fs = require("fs");


const productController = {
    index: (req, res) => {
        const productsJSON = fs.readFileSync("./src/db/products.json", "utf-8");
        const productsObject = JSON.parse(productsJSON);

        res.render("index", { products: productsObject });
    },
    detail: (req, res) => {
        res.render("detail")
    },
    create: (req, res) => {
        res.render("create")
    },
    creatingProcess: (req, res) => {
        const productsJSON = fs.readFileSync("./src/db/products.json", "utf-8");
        const productsObject = JSON.parse(productsJSON);

        console.log("IMAGE PATH: ", req.body.images);

        const newProduct = {
            "id": productsObject[productsObject.length-1].id + 1 ,
            "name": req.body.name,
            "price": req.body.price,
            "image": req.body?.images?`/images/products/${req.body?.images[0]}` : "/images/product_default.png",
            "description": req.body.description,
            "colors": req.body.colors,
            "sizes": req.body.sizes,
            "category": req.body.category
        }

        productsObject.push(newProduct)

        const productsString = JSON.stringify(productsObject, null, 2)
        fs.writeFileSync("./src/db/products.json", productsString);

        res.redirect("/")
    }
}

module.exports = productController;