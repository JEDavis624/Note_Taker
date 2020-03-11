var db = require("../db/db.json");
var fs = require("fs");


module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(db);
    });
    
    app.post("/api/notes", function(req, res){
        let saveNote = req.body
    
    });
    
    app.delete("/api/notes:id", function(req, res){

    });
};