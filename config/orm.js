const connection = require("../config/connection.js");

function questionMarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

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
