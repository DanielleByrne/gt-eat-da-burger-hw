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
  updateOne: function (objColVals, burgerCondition, cb) {
    orm.updateOne("burgers", objColVals, burgerCondition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
