const express = require("express");
const app = express();
app.use(express.json());

const students = [
    {name: "Harsh", marks: 85, city: "Delhi"},
    {name: "Ravi", marks: 70, city: "Mumbai"},
    {name: "Sonal", marks: 90, city: "Bangalore"}
];
app.get("/students",(req,res)=>{
    res.json({
        message: "Students fetched successfully",
        students    
    });
    
})