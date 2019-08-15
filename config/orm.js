const connection = require('./connection');
const mysql = require('mysql')

<<<<<<< HEAD
//Converts the strings passed in to sql friendly syntax with all the nice "?"s!
const questionMarks = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

// Converts the key/value pairs from the passed in object to SQL syntax
const objToSql = ob => {
    const arr = [];
    for (var key in ob) {
      let value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
}
  
=======
>>>>>>> 1b11805a69217f9f8d02f8e503ab4ef35b29f71a
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
<<<<<<< HEAD
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
    connection.query(queryString, [vals], function(error, data) { //the actual query with the constructed mysql syntax passed in.
      if(error) {
        throw error;
      } else {
        cb(data);
      }
    });
},
updateOne: (table, objColVals, condition, cb) => {
    //escape user input then create 1st line of sql UPDATE query.
    const safeTable = connection.escape(table);
    let queryString = `UPDATE ${safeTable}`
    
    queryString += ` SET `;
    queryString += objToSql(objColVals);
    queryString += ` WHERE `;
    queryString += condition;
    
=======
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
>>>>>>> 1b11805a69217f9f8d02f8e503ab4ef35b29f71a
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