const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "pedro",
    password: "pedro-cefis",
    database: "cefis_challenge"
}).promise();

router.get("/",async (req,res,next) => {
    //Get a list of the courses available
    const data = await pool.query("SELECT * FROM courses");

    res.status(200).json({
        message: "Get all courses",
        all_courses: data[0]
    });
});

router.post("/",async (req,res,next) => {
    //Create a new course
    await pool.query("INSERT INTO courses (name,duration,teacher_id) values("+
    '"' + req.body.name + '",' + 
    req.body.duration + ',' + 
    req.body.teacher_id + ')'
    );
    res.status(201).json({
        message: "Course Added",
        course: req.body
    });
});

router.get("/:courseId",async (req,res,next) => {
    //Get the info about a course
    const id = req.params.courseId;

    const data = await pool.query("SELECT * FROM courses WHERE course_id = " + id);

    res.status(200).json({
        message: "Get Course info",
        course_info: data[0][0]
    });
});

router.delete("/:courseId",async (req,res,next) => {
    //Delete the course
    const id = req.params.courseId;

    await pool.query("DELETE FROM courses WHERE course_id = " + id);
    
    res.status(200).json({
        message: "Course Deleted"
    });
});

module.exports = router;