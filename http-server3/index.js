const express = require('express')
const bodyParser=require('body-parser')
const app = express()
const port=process.env.PORT || 3000 // to change port in terminal

app.use(bodyParser.json());
app.post('/', (req, res) => {
    const message=req.query.message; // get message from query
    console.log(message);
    //machine learning thing
    res.json({
        output:"2+2=4"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//$env:PORT=3005
//node index.js

// npx nodemon index.js = to auto restart