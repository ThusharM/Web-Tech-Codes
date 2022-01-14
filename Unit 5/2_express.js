var express=require("express");
var app=express();

app.get("/getabout",function(req,res){
    res.send("GET request received at /getabout");

});

app.post("/postabout",function(req,res){
    res.send("POST request received at /postabout");

});

app.put("/putabout",function(req,res){
    res.send("PUT request received at /putabout");

});

app.delete("/deleteabout",function(req,res){
    res.send("DELETE request received at /deleteabout");

});

app.listen(3000);