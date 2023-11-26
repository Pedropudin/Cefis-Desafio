//import express
const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Acess to the routes and product methods
const productRoutes = require("./api/routes/product");
const orderRoutes = require("./api/routes/order");

app.use(morgan("dev")); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Deal with CORS errors
//It's kinda complicated, but I thinks there is not much to think about it for now
app.use((req,res,next) => {
    res.header("Acess-Control-Allow-Origin", "*"),
    res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(res.method === "OPTIONS") {
        res.header("Acess-Control-Allow-Methods","PUT, POST, PATCH, DELETE");//Ia colocar GET aqui, não sei se pode
        return res.status(200).json({});
    }
    next();
});

//Set a midleware -> don't know what is it
//If path is /products, use product methods, the same for orders
app.use("/products",productRoutes);
app.use("/orders",orderRoutes);

//If get there none of the lines were satisfied, so there must be an error
//This is an error 404
app.use((req,res,next) => {
    const error = new Error("Page Not Found");
    error.status = 404;
    next(error);
});

//Deal with any error on all the aplication
app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
