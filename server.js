// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


app.get("/", function(reg, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(reg, res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function(reg, res){
    res.sendFile(path.join(__dirname, "./db/db.json"));
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });