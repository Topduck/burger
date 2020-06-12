//Import orm 
var orm = require("../config/orm.js");
// This code will call the ORM functions using input
var burger = {
    //display all burgers in the db
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //Add da burger to the db
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    //Update da burger in the db
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    //Delete da burger in the db... if you feel like it.
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res)
        });
    }
};

module.exports = burger;