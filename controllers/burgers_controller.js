const express = require("express");
const burger = require("../models/burger.js");

const app = express.Router();

app.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgerObject = {
      burgers: data,
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

app.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.name, function (result) {
    console.log("new name burger:", burger);
    res.json({ id: result.insertId });
  });
});

app.put("/api/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    burger.selectAll(function (data) {
      var burgerObject = {
        burgers: data,
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });
});

module.exports = app;
