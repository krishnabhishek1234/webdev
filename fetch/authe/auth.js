const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";


const ALL_USERS = [ {
    name:"Rahul",
    username: "rahul@gmail.com",
    password: "456567",
},
    {
        name: "Abhishek",
        username: "abhishek@gmail.com",
        password: "87354795",
    },
    {
        name: "Rohit",
        username: "rohit@gmail.com",
        password: "4384857",
    },
];

const app = express();
app.use(express.json());

function userExists(username, password) {
    let userExists=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username from the database
        res.json({
            users:ALL_USERS.filter((user) => user.username !== username),
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);