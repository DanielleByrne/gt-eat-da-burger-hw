const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const cat = require("../models/burger.js");
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
