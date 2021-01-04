const path = require("path");
const express = require("express");
const app  = express();
app.use(express.static("public"))
app.use(function(req,res,next){
    res.sendFile(path.join(__dirname,"public","index.html"));
});
app.listen(8080);