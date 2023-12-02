const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "pedro",
    password: "pedro-cefis",
    database: "cefis_challenge"
}).promise();

router.post("/",(req,res,next) => {
    //Insert a new user in the database
    res.status(201).json({
        message: "User Added",
    });
    //ESSA PARTE DEBAIXO FUNCIONOU!!!
    (async () => {
        await pool.query(
            'INSERT INTO users values(' +
            req.body.userId +  ',' +
            '"' +req.body.first_name + '"' + ',' +
            '"' + req.body.last_name + '"' + ',' +
            req.body.type +
            ')'
        )
    })();
});

router.get("/",(req,res,next) => {
    //Get a list of the users
    res.status(200).json({
        message: "Send Users"
        //Don't know how to actually send that data #########
    });
});

router.get("/:userId",(req,res,next) => {
    //Get the info of the user with the Id
    
});

router.put("/:userId",(req,res,next) => {
    //Change the info if the user with the specific Id
});

router.delete("/:userId",(req,res,next) => {
    //Delete the user
});

module.exports = router;