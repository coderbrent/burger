const connection = require('./connection');
const mysql = require('mysql')

const orm = {
selectAll: (cb) => {
    let queryString = 'SELECT * FROM burgers';
    connection.query(queryString, (error, result) => {
      if(error) {
        throw error;
        } else {
        cb(result);
        }
    });
},
create: (cols, vals, cb) => {
  console.log('create is called')
  connection.query('INSERT INTO burgers (??) VALUES (?)', [cols, vals], function(error, data) { //the actual query with the constructed mysql syntax passed in.
      cb(data)
      console.log('data returned: ' + data)
      console.log(error)
    });
},
update: (objColVals, id, cb) => {
    let value = true;
    let queryString = 'UPDATE burgers SET devoured = ' + value;
    queryString += ' WHERE id = ' + connection.escape(id);
    
    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: (id, cb) => {
    const queryString = 'DELETE FROM burgers WHERE id = ' + connection.escape(id);
    connection.query(queryString, id, (err, result) => {
      if(err) {
        console.log(err)
      }
      cb(result);
    })
  }
}

module.exports = orm;