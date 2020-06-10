var connection = require("../config/connection.js");
 //Helper function to create sql syntax
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
  
    return arr.toString();
};
  //helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
      var arr = [];
      //loop through the keys and push the key/value as strings into the arr var
      for (var key in ob) {
          var value = ob[key];
          //check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotation marks to either end
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}var orm = {
    //select all burgers for display. R in CRUD
    selectAll: function(table, cb){
        var quiryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //adds a new burger to table C in CRUB
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    // updates the burgers in the table. The U in CRUB
    update: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
    //just in case we want to add a delete function to our app. the D in CRUD
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }
}


module.exports = orm;

