module.exports = function(app){
    app.get("/", function(reg, res){
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
    
    app.get("/notes", function(reg, res){
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });
};


