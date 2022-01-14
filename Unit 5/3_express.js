var express=require("express");
var app=express();

app.get('/:id',function(req,res){
    res.send("The ID specified is" + res.params.id);
});
app.get('/class/name/:id',function(req,res){
    res.send("The name specified is" + res.params.name);
});

app.listen(3000);