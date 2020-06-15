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
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
        res.json({id: result.insertId});
    });
});
// reseting a burger as devoured
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            // If no burgers are changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
//delete a burger from the db
router.delete("/api/burgers/:id", function(req, res){
    burger.deleteOne(condition, function(result){
        if(result.changedRows === 0) {
            //if no burgers were deleted this will catch the 404 error.
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    })
});

modeule.exports = router
