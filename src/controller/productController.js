const fs = require("fs");

const productController = {
    index: (req, res) => {
        const productsJSON = fs.readFileSync("./src/db/products.json", "utf-8");
        const productsObject = JSON.parse(productsJSON);
        console.log(productsObject); 
        res.render("index", {products:productsObject});
    },
    detail: (req, res) => {
        res.render("detail")
    }
}

module.exports = productController;