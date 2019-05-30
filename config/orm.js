const connection = require('./connection');

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

  }
}

module.exports = orm;