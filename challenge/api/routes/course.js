const express = require("express");
const router = express.Router();

router.get("/",(req,res,next) => {
    //Get a list of the courses available
});

router.post("/",(req,res,next) => {
    //Creta e new course
});

router.get("/:courseId",(req,res,next) => {
    //Get the info about a course
});

router.delete("/:courseId",(req,res,next) => {
    //Delete the course
});

module.exports = router;