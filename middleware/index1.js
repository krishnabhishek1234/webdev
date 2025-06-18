const express = require("express");
const app = express();

// User middleware
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "abhishek" || password !== "pass") {
        return res.status(403).json({
            msg: "Incorrect Input"
        });
    } else {
        next();
    }
}

// Kidney middleware
function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId);

    if (kidneyId !== 1 && kidneyId !== 2) {
        return res.status(403).json({
            msg: "Incorrect Input"
        });
    } else {
        next();
    }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Your heart is healthy");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
