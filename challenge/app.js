const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");

app.use(cors());

//Esses dois não baixei ainda
//const morgan = require("morgan");

//Acess to the methods here
const userRoutes = require("./api/routes/user");
const courseRoutes = require("./api/routes/course");

//Deal with CORS errors
app.use((req,res,next) => {
    res.header("Acess-Control-Allow-Origin", "*"),
    res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(res.method === "OPTIONS") {
        res.header("Acess-Control-Allow-Methods","PUT, POST, PATCH, DELETE, GET");//Ia colocar GET aqui, não sei se pode
        return res.status(200).json({});
    }
    next();
});

//Set midlewares
app.use("/user",userRoutes);
app.use("/course",courseRoutes);

//Deal with errors 
//Page not found error
app.use((req,res,next) => {
    const error = new Error("Page not found");
    error.status = 404;
    next(error);
});
//Other errors
app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            status: error.status
        }
    });
});

module.exports = app