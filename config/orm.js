const connection = require('./connection.js');

let orm = {
selectAll: function selectAll() {
    connection.query('SELECT * FROM burgers', function(data, status, fields) {
    
        })
    },
insertOne: function insertOne() {
    connection.query('INSERT INTO burgers')
    },
}

module.exports = orm;