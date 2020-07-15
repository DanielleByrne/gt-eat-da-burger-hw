const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
      //not logging 
    //   console.log(result);
    }
  );
});
router.update("/api/bugers/:id", function (req,res){
  let burgerCondition = "id = " + req.params.id;
  console.log("condition", burgerCondition);
})

module.exports = router;
