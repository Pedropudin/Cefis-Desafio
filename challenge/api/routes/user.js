const express = require("express");
const router = express.Router();

router.post("/",(req,res,next) => {
    //Insert a new userin the database
});

router.get("/",(req,res,next) => {
    //Get a list of the users
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