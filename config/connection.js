require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : process.env.PORT,
  user     : 'root',
  password : process.env.DB_PASS,
  database : 'burgers_db'
});
 
connection.connect();
 
module.exports = connection;


 
