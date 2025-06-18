const express=require("express");
const app=express();

let numberOfRequest=0;
function calculateRequests(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}

app.get("/health-checkup", calculateRequests, function (req, res) {
    res.send("ghg");
});

app.listen(3000);

//find the average time your server is taking to handle requests