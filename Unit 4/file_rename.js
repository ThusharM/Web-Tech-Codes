var fs=require("fs");
fs.rename("input.txt","renamed.txt",function(err){
    if (err) throw err;
    console.log("file renamned");
});