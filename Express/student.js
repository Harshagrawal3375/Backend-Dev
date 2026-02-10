const express = require("express");
const app = express();
app.use(express.json());
const students = [
    {id: 1, name: "Harsh", status: "active"},
    {id: 2, name: "Ravi", status: "inactive"},
    {id: 3, name: "Sonal", status: "active"}
]
app.get("/students",(req,res)=>{
    res.json({
        message: "Students fetched successfully",
        students
    })
});
app.patch("/students/:id", (req, res) => {                                     
    const id = parseInt(req.params.id);
    const { status } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    if (status !== "active" && status !== "inactive") {
        return res.status(400).json({
            message: "Student status must be either 'active' or 'inactive'"
        });
    }

    student.status = status;

    res.json({
        message: "Student updated successfully",
        student
    });
});
app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});