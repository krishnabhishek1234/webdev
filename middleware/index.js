const express=require("express");
const app=express();

// ugly way of doing 

app.get("/health-checkup",(req,res) =>{
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyId=req.query.kidneyId;

    if(username != "abhishek" || password != "pass"){
        
        res.status(400).json({
            msg:"something is up with the input header"
        })
        return
    }
    if(kidneyId !=1 && kidneyId !=2){
        res.status(400).json({
            msg:"something is up with the input query"
        })
        return
    }
    //do something with the kidney here
    res.json({
        msg: "Your kidney is fine!"
    })
});
app.listen(3000);