var fs=require("fs");
var data=fs.readFile("text.txt",function(err,data){
    if(err)
    {
        console.log(err);
    }   
    setTimeout(()=>{
        console.log("After 2 seconds" + data);
    },2000);
});
console.log("Start Here");