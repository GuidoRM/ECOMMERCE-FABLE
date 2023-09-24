const fs = require("fs");

const mainController = {
    index: (req, res) => {
        const productsJSON = fs.readFileSync("./src/db/products.json", "utf-8");
        const productsObject = JSON.parse(productsJSON);
        res.render("index", {products:productsObject});
    }
}

module.exports = mainController;