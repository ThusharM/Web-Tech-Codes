var express = require("express")
var app=express();


app.use('/things',function(req, res,next){
    console.log("A Request for the things received at" + Date.now());
    next();
});
app.use('/things',function(req, res){
    res.send("Things");
});
app.listen(3000);