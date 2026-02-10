//  const express = require('express');
// const app = express();
// const port = 3000;

// // ⭐ VERY IMPORTANT MIDDLEWARE
// app.use(express.json());


// // Dummy Database
// const students = [
//     {
//         name: "Harsh",
//         id: 1,
//         attendance: [
//             { date: "2024-10-01", present: true },
//             { date: "2024-10-02", present: false }
//         ]
//     },
//     {
//         name: "Amit",
//         id: 2,
//         attendance: [
//             { date: "2024-10-01", present: true },
//             { date: "2024-10-02", present: true }
//         ]
//     },
//     {
//         name: "Ravi",
//         id: 3,
//         attendance: [
//             { date: "2024-10-01", present: true },
//             { date: "2024-10-02", present: true }
//         ]
//     }
// ];


// // ✅ HOME ROUTE (Check server)
// app.get("/", (req, res) => {
//     res.send("Attendance API Running ✅");
// });


// // ✅ GET ALL STUDENTS
// app.get("/students", (req, res) => {
//     res.json(students);
// });


// // ✅ GET STUDENT BY ID
// app.get("/students/:id", (req, res) => {

//     const studentId = parseInt(req.params.id);

//     const student = students.find(s => s.id === studentId);

//     if (!student) {
//         return res.status(404).send("Student not found ❌");
//     }

//     res.json(student);
// });


// // ✅ ADD ATTENDANCE
// app.post("/students/:id/attendance", (req, res) => {

//     const studentId = parseInt(req.params.id);
//     const { date, present } = req.body || {};

//     if (!date || present === undefined) {
//         return res.status(400).send("Provide date and present status");
//     }

//     const student = students.find(s => s.id === studentId);

//     if (!student) {
//         return res.status(404).send("Student not found ❌");
//     }

//     student.attendance.push({
//         date,
//         present
//     });

//     res.send("Attendance added successfully ✅");
// });


// // ✅ DELETE ATTENDANCE (ADVANCED 🔥)
// app.delete("/students/:id/attendance/:date", (req, res) => {

//     const studentId = parseInt(req.params.id);
//     const date = req.params.date;

//     const student = students.find(s => s.id === studentId);

//     if (!student) {
//         return res.status(404).send("Student not found");
//     }

//     student.attendance = student.attendance.filter(a => a.date !== date);

//     res.send("Attendance deleted ✅");
// });


// // ✅ SERVER
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
// ---------------------------------------------------------------------------------------------------------------------------------------
// const express=require("express");
   // const app=express();
   // app.get("/",(req,res)=>{
   //  return res.send("home page");
   // });
   // app.get("/attendance",(req,res)=>{
   //  const name=req.query.name;
   //  const present=req.query.present;
   //  res.send(`${name} is ${present} present`); 
   //  });

   const express=require("express");
   const app=express();
   app.use(express.json());
   app.get("/",(req,res)=>{
    return res.send("home page");
   });
   app.get("/attendance",(req,res)=>{
    const name=req.query.name;
    const present=req.query.present;
    res.send(`${name} is ${present} present`); 
    });
     

    const students=[
    {name:"yash",id:1,branch:"CSE"},
    {name:"akash", id:2, branch:"CSE"},
    {name:"aryan" ,id:3,branch:"CSE"},
   ];


//student API
app.post("/student/add",async (req,res)=>{
   const data=req.body;
   // students.push({name:data.name, id:data.id, branch:data.branch});
   // or
   students.push(data);
   res.send(students);
});
   app.listen(8000,()=> console.log("server started"));
   const isEmailTaken = credentials.some((c)=>c.email === data.email);
    if(isEmailTaken) return res.status(400).send("Email already taken");