const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
      console.log(result);
    }
  );
});
router.put("/api/burgers/:id", function (req, res) {
  console.log (req.body)
  let burgerCondition = "id = " + req.params.id;
  console.log("condition", burgerCondition);
  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    burgerCondition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
