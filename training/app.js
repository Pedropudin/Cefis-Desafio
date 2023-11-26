//import express
const express = require('express');
const app = express();
const morgan = require("morgan");

//Acess to the routes and product methods
const productRoutes = require("./api/routes/product");
const orderRoutes = require("./api/routes/order");

app.use(morgan("dev")); 

//Set a midleware -> don't know what is it
//If path is /products, use product methods, the same for orders
app.use("/products",productRoutes);
app.use("/orders",orderRoutes);

//If get there none of the lines were satisfied, so there must be an error
//This is an error 404
app.use((req,res,next) => {
    const error = new Error("Not Found");
    error.status(404);
    next(error);
});

//Deal with any error on all the aplication
app.use((error,req,res,next) => {

});

module.exports = app;
