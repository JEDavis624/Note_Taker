module.exports = function(app){
    app.get("/api/notes", function(reg, res){
        res.sendFile(path.join(__dirname, "./db/db.json"));
    });
    
    app.post("/api/notes", function(req, res){
    
    
    });
    

};