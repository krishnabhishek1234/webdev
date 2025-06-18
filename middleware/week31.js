const express=require("express");
const app=express();

app.use(express.json());

app.post("/health-checkup",(req,res) => {
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;

    res.send("you have"+kidneyLength+"kidneys");
});

//global catch
app.use(function(err,req,res,next){
    res.json({
        msg: "sorry something is up with the server"
    })
})
app.listen(3000);