const express = require("express");
const app = express();
app.use(express.json());
let students = [
    { id: 1, name: "Harsh", marks: 85, city: "Delhi" },
    { id: 2, name: "Ravi", marks: 65, city: "Mumbai" },
    { id: 3, name: "Sonal", marks: 90, city: "Bangalore" }
];
// View Students
app.get("/students", (req, res) => {
    res.json({ students });
});

// Delete Student
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    if (students[index].marks < 70) {
        const deletedStudent = students.splice(index, 1);
        res.json({
            message: "Student deleted successfully",
            student: deletedStudent[0]
        });
    } else {
        res.status(400).json({
            message: "Cannot delete student with marks less than 70"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000", "http://localhost:3000/students");
});