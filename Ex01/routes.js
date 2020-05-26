const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/src/html/index.html");
});


app.get("/estilo",function(req,res){
    res.sendFile(__dirname+"/src/estilo/estilo.css");
});

app.get("/html/:htmlName",function(req,res){
    res.sendFile(__dirname+"/src/html/"+req.params.htmlName+".html");
});

app.get("/app/:appName",function(req,res){
    res.sendFile(__dirname+"/src/"+req.params.appName+".js");
});

app.get("/images/:imgName",function(req,res){
    res.sendFile(__dirname+"/src/images/"+req.params.imgName+".jpg");
});






app.listen(8090,function(){
    console.log("server port 8090");
});