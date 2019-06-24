const connection = require('./connection');
const mysql = require('mysql')

//Helper function made to create the correct amount of ? marks needed to properly use the mysql insert querys
const questionMarks = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }


function objToSql(ob) {
    const entries = Object.entries(ob)
    const arr = [];
    console.log(`entries: ${entries}`)
    for (const key of entries) {
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


//Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
}
  
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
updateOne: (table, objColVals, condition, cb) => {
    //escape user input then create 1st line of sql UPDATE query.
    const safeTable = connection.escape(table);
    let queryString = `UPDATE ${safeTable}`
    
    //continue to add more sql string based on user actions.
    queryString += ` SET `;
    queryString += objToSql(objColVals);
    queryString += ` WHERE `;
    queryString += condition;
    
    //query the db and return results as a callback from updateOne method.
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: (table, id, cb) => {
    const safeTable = connection.escape(table);
    let queryString = `DELETE FROM ${safeTable} WHERE id ??`

    connection.query(queryString, [id], (err, result) => {
      if(err) {
        throw err;
      }
      cb(result);
    })

  }
}

module.exports = orm;