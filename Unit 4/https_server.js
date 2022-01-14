var http=require("http");
http.createServer(function(req,res){
    //res.write("Hello World");
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<b>Hello World</b><br>");
    res.write('<span style="font-weight:bold,color:"Red">Welcome To what idek</span>');
    res.end();
}
).listen(8080,console.log("Server is listening on port 8080"));