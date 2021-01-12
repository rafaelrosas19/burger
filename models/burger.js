var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (name, cb) {
    orm.insertOne(
      "burgers",
      ["burger_name", "devoured"],
      [name, false],
      function (res) {
        cb(res);
      }
    );
  },
  updateOne: function (id, cb) {
    var condition = "id=" + id;
    orm.updateOne("burgers", { devoured: true }, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
