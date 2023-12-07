const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "pedro",
    password: "pedro-cefis",
    database: "cefis_challenge"
}).promise();

router.post("/",async (req,res,next) => {
    //Insert a new question
    await pool.query("INSERT INTO questions (user_id,course_id,text,status) values(" + 
    req.body.user_id + "," +
    req.body.course_id + "," + 
    "'" + req.body.text + "'," + 
    req.body.status + ")"
    );

    res.status(201).json({
        message: "Question Added",
        Question: req.body
    });
});

router.get("/",async (req,res,next) => {
    //Get a list of all the questions

    const all_questions = await pool.query("SELECT * FROM questions");

    res.status(200).json({
        message: "Get questions",
        all_questions: all_questions
    });
});

router.get("/:questionId",async (req,res,next) => {
    //Get info about one question

    const id = req.params.questionId;

    const quest = await pool.query("SELECT * FROM questions WHERE id = "+id);

    res.status(200).json({
        message: "Get question",
        question: quest[0][0]
    });
});

router.put("/:questionId",async (req,res,next) => {
    //Change one questions

    const id = req.params.questionId;

    await pool.query("UPDATE questions SET" + 
    "solution = " + "'" + req.body.solution + "'" + "," + 
    "status = 1" + 
    "WHERE id = " + id
    );
})


router.delete("/questionId",async (req,res,next) => {
    const id = req.params.questionId;

    await pool.query("DELETE FROM questions WHERE id = " + id);

    res.status(200),json({
        message: "Question Deleted"
    });
});