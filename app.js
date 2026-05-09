const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Platform Engineering CI/CD Project Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});