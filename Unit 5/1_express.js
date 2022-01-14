var express = require("express");
var app=express();
app.get('/',function(req,res){
    res.send("hello");
});
app.listen(2000);

const http=require("http");
const hostname="127.0.0.1";
port=8080;
server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello World");
});
server.listen(port,hostname,()=>{
    console.log(`server running at http://localhost:$(port)`)
})