var express = require("express")
var app=express();

app.get('/things/:id([0-9]{5})',function(req,res){
    res.send("The ID specified is" + res.params.id);
});
app.get('*',function(req,res){
    res.send("Invalid");
});

app.listen(3000);