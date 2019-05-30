const connection = require('./connection');

//Helper function made to create the correct amount of ? marks needed to properly use the mysql insert querys
const questionMarks = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

const orm = {
selectAll: (cb) => {
    let queryString = 'SELECT * FROM burgers';
    connection.query(queryString, (error, result) => {
      if(error) {
        throw error;
        } else {
        cb(result);
        console.log(result)
        }
    });
},
insertOne: function(table, cols, vals, cb) {
    //this dynamically constructs a query based on the columns passed in and the values (? count correlates to how many user created values are in the array)
    //note: this feels like it could be refactored somehow?
    let queryString = `INSERT INTO ${table}`;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += questionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, [vals], function(data, error, fields) { //the actual query with the constructed mysql syntax passed in.
      if(error) {
        throw error;
      } else {
        cb(data);
      }
    });
},

}

module.exports = orm;