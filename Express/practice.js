const express=require('express');
const app=express();

app.get("/",function(req,res){
    res.send("Hello World");
});
app.get("/profile",function(req,res){
    res.send("This is profile page");
});
app.get("/profile/:username",function(req,res){
    res.send("Hello from " + req.params.username);
});
app.listen(3000,()=>{
    console.log("Server s running at port 3000");
});

