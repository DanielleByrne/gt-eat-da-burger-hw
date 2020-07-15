const orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (objColVals, condition, cb) {
    orm.insertOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  // updateOne()

};

module.exports = burger;
