const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

//{
// email:string =>email
// password:alteast 8 character
// country:"IN","US"
//}

// const schema=zod.object({
//     email:zod.string(),
//     password:zod.string(),
//     country:zod.literal("IN").or(z.literal("US")),
//     kidneys:zod.array(zod.number())
// })


app.use(express.json());

app.post("/health-checkup", function(req, res) {
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }else{
        res.send({
            response
        });
    }
    
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
