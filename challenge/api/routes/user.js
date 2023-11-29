const express = require("express");
const router = express.Router();

router.post("/",(req,res,next) => {
    //Insert a new user in the database
    const user = {
        userId: req.body.userId,
        userName: req.body.userName,
        userCourses: req.body.userCourses,
    }
    res.status(201).json({
        message: "User Added",
        user: user
    });
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