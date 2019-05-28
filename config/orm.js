const connection = require('./connection.js');
const mysql = require('mysql');

let orm = {
selectAll: function selectAll() {
    connection.query('SELECT * FROM burgers', function(data, status, fields) {
    
        })
    },
insertOne: function insertOne(burger, bool) {
    connection.query('INSERT INTO burgers VALUES ??', [burger, bool], function(data, status, fields) {
      if(!status === 200) {
        console.log('Captain! Captain! Theres been an error!');
      } else { console.log(`The following changes have been made ${data}`) };
        })
    },
}

module.exports = orm;