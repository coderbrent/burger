function connection() {
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Zsw0wers!',
  database : 'burgers_db'
});
 
connection.connect();
 
connection.query('SELECT * FROM burgers', function(error, results, fields) {
    if(error) throw error;
    console.log(results)
})

}

module.exports = connection();