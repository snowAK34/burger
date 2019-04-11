const orm = require("../config/orm.js");

const burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(colName, inputVal, cb) {
        orm.insertOne("burgers", colName, inputVal, function(res) {
            cb(res);
        });
    },
    update: function(idNum, cb) {
        orm.updateOne("burgers", "devoured", 1, "id", idNum, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;