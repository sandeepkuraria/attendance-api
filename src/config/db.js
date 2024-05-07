const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database");
});
// Select the database
db.query(`USE ${process.env.DB_DATABASE}`, (err, result) => {
  if (err) {
    console.error("Error selecting database: " + err.stack);
    return;
  }
  console.log("Database selected");
});

module.exports = db;
