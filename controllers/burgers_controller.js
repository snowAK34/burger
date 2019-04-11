const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        let resObj = {
            burgers: data
        };
        res.render("index", resObj);
    });
}); 

router.post("/add", function(req, res) {
    burger.insert("burger_name", req.body.burger_name, function(data) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(data) {
        res.json(data);
    });
});

module.exports = router;