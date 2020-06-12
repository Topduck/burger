// require express
var express = require("express");
// set up router
var router = express.Router();
// import the model (burger.js) to access its database functions
var burger = require("../models/burger.js");

//create the routes we need to run the fucntions
// get all burgers
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
    };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});
 // post a new burger
router.post("/api/burgers", function(res, req) {
    burger.create(
        
    )
}
