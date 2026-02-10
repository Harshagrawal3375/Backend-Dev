const express = require("express");
const app = express();
app.use(express.json());
const credentials = [
    { email: "parth@gmail.com", password: "123456" },
    { email: "atul123@gmail.com", password: "123456" }
];

// Register Page
app.post("/auth/register", async (req, res) => {
    const data = req.body;
    // Check if user already exists
    const extinguisher = credentials.find(
        (cred => cred.email == data.email)
    );
    if (extinguisher) {
        return res.status(400).send("User already exists");
    }
    credentials.push(data);
    res.send("Registration Successful");
})

// Login Page
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const user = credentials.find(
    );
    (cred => cred.email == email && cred.password == password)
    console.log(user);
    if (user) {
        res.send({ message: "Login Successful", user });
    } else {
        res.send("Invalid credential");
    }
})

app.listen(8000, () => console.log("server started"));