const orm = require("../config/orm.js");

const burger = {
  // will call the ORM functions using burger specific input
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  
};

module.exports = burger;
