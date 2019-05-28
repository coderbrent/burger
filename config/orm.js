const connection = require('./connection');

//Helper function made to create the correct amount of ? marks needed to properly use the mysql insert querys
function questionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

var orm = {
selectAll: function(table, cb) {
    let burgerID = connection.escape(table);
    let queryString = (`SELECT * FROM ${burgerID}`);
    connection.query(queryString, function(data, error, fields) {
      if(error) {
        console.log(data);  
        throw error;
        } else {
            console.log(data);
          return cb(data);
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