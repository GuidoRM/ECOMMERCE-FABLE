//Modules
const express = require("express");
const methodOverride = require("method-override");

//Constant
const app = express();
const port = 4000 || process.env.PORT;

//General Config
app.use(express.static("./public"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//EJS Config
app.set("view engine", "ejs");
app.set("views", "./src/views")

//Server Running
app.listen(port, ()=>{
    console.log(`Server Running on PORT ${port}: http://localhost:${port}`);
});

//Route Files
const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/", mainRoutes);
app.use("/product", productRoutes);

// Not Found Page 404
app.use((req,res,next)=> {
    res.status(404).send("NOT FOUND")
})