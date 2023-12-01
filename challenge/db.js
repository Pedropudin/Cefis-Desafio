//This file is an example of how to access databse in mysql
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "pedro",
    password: "pedro-cefis",
    database: "cefis_challenge"
}).promise();

async function printInfo() {
    let info = await pool.query("SELECT * FROM users");
    console.log(info[0][0].user_id);
}

printInfo();