var express = require('express');
var app=express();

const upload = require("express-fileupload");
app.use(upload());
app.get('/',function(req, res){
    res.sendFile(__dirname+'/file.html',req.params.filename);

});
app.post('/',function(req,res){
    if(req.files)
    {
        console.log(req.files);
        var file=req.files.img;
        console.log(filename);
        file.mv('./Upload/'+filename,function(err){
            if(err)
            {
                   res.send(err); 
            }
            else
            {
                res.send("File Uploaded")
            }
        });
    }
});
app.listen(3000);