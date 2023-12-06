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
    
    function onlyNumbers(string) {
        const onlyNumberRule = /^\d+$/;
        return onlyNumberRule.test(string);
    }

    if(onlyNumbers(req.body.type)){
        (async () => {
            await pool.query(
                'INSERT INTO users (first_name,last_name,type) values(' +
                '"' +req.body.first_name + '"' + ',' +
                '"' + req.body.last_name + '"' + ',' +
                req.body.type +
                ')'
            )
        })();
        res.status(201).json({
            message: "User Added",
            user: req.body
        });
    } else{
        const error = new Error("Invalid syntax");
        error.status = 400;
        next(error); //Don't know if this error works
    }
});

router.get("/",async (req,res,next) => {
    //Get a list of the users

    const all_users = await pool.query("SELECT * FROM users");

    res.status(200).json({
        message: "Send Users",
        all_users: all_users[0]
    });
});

router.get("/:userId",async (req,res,next) => {
    //Get the info of the user with the Id
    const id = req.params.userId;

    const data = await pool.query("SELECT * FROM users WHERE user_id = " + id);

    res.status(200).json({
        message: "Get User Info",
        user: data[0][0]
    });
});

router.put("/:userId",async (req,res,next) => {
    //Change the info if the user with the specific Id

    const id = req.params.userId;

    function onlyNumbers(string) {
        const onlyNumberRule = /^\d+$/;
        return onlyNumberRule.test(string);
    }

    if(onlyNumbers(req.body.type)){
        await pool.query(
            "UPDATE users SET" + 
            " first_name = '" + req.body.first_name + 
            "', last_name = '" + req.body.last_name + 
            "', type = " + req.body.type + 
            " WHERE user_id = " + id
        );
        res.status(200).json({
            message: "User info changed",
            new_user: req.body
        })
    } else {
        const error = new Error("Invalid syntax");
        error.status = 400;
        next(error); //Don't know if this error works either
    }
});

router.delete("/:userId",async (req,res,next) => {
    //Delete the user
    const id = req.params.userId;

    await pool.query("DELETE FROM users WHERE user_id = " + id);

    res.status(200).json({
        message: "User Deleted"
    });
});

module.exports = router;