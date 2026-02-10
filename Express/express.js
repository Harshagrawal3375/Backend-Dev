// const express = require("express");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));     //Middleware to parse URL-encoded bodies

// const credentials = [
//     { email: "Sachin248@gmail.com", password: "Sachin@123" },
//     { email: "Ravi263@gmail.com", password: "Ravi@123" }
// ];

// app.post("/auth/register", (req, res) => {
//     const { email, password } = req.body;

//     // check if user already exists
//     const isEmailTaken = credentials.some(c => c.email === email);
//     if (isEmailTaken) {
//         return res.status(400).send("Email already taken");
//     }

//     // password validation: must contain @
//     if (!password.includes("@")) {
//         return res.status(400).send("Password must contain @");
//     }

//     credentials.push({ email, password });
//     res.send("Registered successfully");
// });

// app.post("/auth/login", (req, res) => {
//     const { email, password } = req.body;

//     const user = credentials.find(
//         c => c.email === email && c.password === password
//     );

//     if (user) {
//         res.send("Login successful");
//     } else {
//         res.status(401).send("Invalid email or password");
//     }
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server Started at http://localhost:${port}`);
// });

// ---------------- Express Server with User Authentication ----------------
const express = require("express");
const app = express();

app.use(express.json());

// Dummy database
let credentials = [
    { email: "sscool@gmail.com", password: "12345" },
    { email: "ravi123@gmail.com", password: "67890" }
];

// ---------------- Get all users ----------------
app.get("/auth/users", (req, res) => {
    res.json({
        message: "Users fetched successfully",
        credentials
    });
});

// ---------------- Reset password (old password required) ----------------
app.put("/auth/reset", (req, res) => {
    const { email, password, newPassword } = req.body;

    if (!email || !password || !newPassword) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // find user
    const user = credentials.find(
        cred => cred.email === email && cred.password === password
    );

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }

    // update password
    user.password = newPassword;

    res.json({
        message: "Password updated successfully",
        user
    });
});

// ---------------- Change email (password required) ----------------
app.put("/auth/change-email", (req, res) => {
    const { password, newEmail } = req.body;
    if (!password || !newEmail) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
    // find user
    const user = credentials.find(
        cred => cred.password === password
    );

    if (!user) {
        return res.status(400).json({
            message: "Invalid password"
        });
    }
    // check if new email already exists
    const emailExists = credentials.some(cred => cred.email === newEmail);
    if (emailExists) {
        return res.status(400).json({
            message: "Email already taken"
        });
    }
    // update email
    user.email = newEmail;

    res.json({
        message: "Email updated successfully",
        user
    });
});

// ---------------- Forgot password (only email required) ----------------
app.post("/auth/forgot", (req, res) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({
            message: "Email and newPassword are required"
        });
    }

    // find user by email
    const user = credentials.find(cred => cred.email === email);

    if (!user) {
        return res.status(400).json({
            message: "Email not found"
        });
    }

    // update password
    user.password = newPassword;

    res.json({
        message: "Password reset successful",
        user
    });
});

// ---------------- Server ----------------
app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});