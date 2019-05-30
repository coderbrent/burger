const connection = require('./connection');

//Helper function made to create the correct amount of ? marks needed to properly use the mysql insert querys
const questionMarks = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
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
insertOne: (table, cols, vals, cb) => {
    //this dynamically constructs a query based on the columns passed in and the values (? count correlates to how many user created values are in the array)
    let safeTable = connection.escape(table);
    const queryString = `INSERT INTO ${safeTable}`;
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