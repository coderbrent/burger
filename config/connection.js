require('dotenv').config();
const mysql = require('mysql');
<<<<<<< HEAD

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : process.env.DB_PASS,
  database : 'burgers_db'
});
=======
var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : process.env.DB_PASS,
    database : 'burgers_db'
  });
}

>>>>>>> 1b11805a69217f9f8d02f8e503ab4ef35b29f71a
 
connection.connect();
 
module.exports = connection;


 
