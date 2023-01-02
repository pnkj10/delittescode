var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});
app.get("/hostinfo",function(req,res){
    res.sendFile(__dirname+"/hostinfo.html")
});

app.listen(8000);
console.log("port no 8000")