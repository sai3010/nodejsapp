var express=require("express");
var app=express();

var port=process.env.PORT;
app.use(express.static('public'));
app.use(express.static('src/view'));
app.get('/',function(req,res){
   res.send("hello world"); 
});
app.listen(port,function(err)
{
   console.log(port); 
});