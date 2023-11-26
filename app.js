//import express
const express = require('express');
const app = express();

//Acess to the routes and product methods
const productRoutes = require("./api/routes/product");
const orderRoutes = require("./api/routes/order");

//Set a midleware -> don't know what is it
//If path is /products, use product methods, the same for orders
app.use("/products",productRoutes);
app.use("/orders",orderRoutes);

module.exports = app;
