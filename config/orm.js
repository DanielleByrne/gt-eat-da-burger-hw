const connection = require("../config/connection.js");

// function adding quotation marks into the query, referened from class activity 
function questionMarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// function to take the object and format it for SQL, also referenced from class activity 
function objSql(ob) {
  let arr = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}
//select all function
const orm = {
  selectAll: function (tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //inserting new burgers function
  insertOne: function (burgersTable, burgerName, burgerValues, cb) {
    let queryString = "INSERT INTO " + burgersTable;

    queryString += " (";
    queryString += burgerName.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += questionMarks(burgerValues.length);
    queryString += ") ";

    connection.query(queryString, burgerValues, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //updating burgers from eaten/not eaten
  updateOne: function(burgersTable, objBurgerVal, devouredCondition, cb){
    let queryString = "UPDATE " + burgersTable;
    queryString += " SET ";
    queryString += objSql(objBurgerVal);
    queryString += " WHERE ";
    queryString += devouredCondition;

    console.log(queryString);
    connection.query(queryString, function(err, result){
      if (err){
        throw err
      }
      cb(result)
    })
  }

};
 
module.exports = orm;
