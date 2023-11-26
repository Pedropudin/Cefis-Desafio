//import express
const express = require('express');
const app = express();

const productRoutes = require("./api/routes/product");

//Set a midleware -> don't know what is it
app.use("/products",productRoutes);

module.exports = app;
