const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    return res.send(`My name is ${name}`);
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
