const express=require('express')
const morgan = require('morgan')
const app=express()
const userModel=require('./models/user')
const dbConnection= require('./config/db')

app.use(morgan('dev'))

//middleware for post else remove
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//for linking css
app.use(express.static("public"))

//npm i ejs
app.set("view engine",'ejs')

// app.use((req,res,next) => {
//     console.log("This is middleware")
//     return next()
// })
app.get('/',
    (req,res,next) =>{
        const a=5;
        const b=10;
        console.log(a+b)

        next()
    }
    ,(req,res) =>{
    res.render('index')
})

app.get('/about',(req,res) =>{
    res.send("About page")
})


//for user data
app.get('/register',(req,res) =>{
    res.render('register')
})

app.post('/register', async (req,res) =>{
    const { username, email,password}= req.body
    const newUser= await userModel.create({
        username: username,
        email:email,
        password: password
    })
    res.send(newUser)
})

//find all user from db
app.get('/get-users',(req,res) =>{
    // userModel.find({
    //     username : 'a'
    // }).then((users) =>{
    //     res.send(users)
    // })
    userModel.findOne({
        username : 'a'
    }).then((users) => {
        res.send(users)
    })
})

//update
app.get('/update-user', async (req,res) => {
    await userModel.findOneAndUpdate({
        username : 'a'
    },{
        email : "abc@a.com"
    })
    res.send("user updated")
})

//delete
app.get('/delete-user', async (req,res) => {
    await userModel.findOneAndDelete({
        username : 'a'
    })
    res.send("user deleted")
})


//get method 
// app.get('/get-form-data',(req,res) =>{
//     console.log(req.query)
//     res.send('data received')
// })

app.post('/get-form-data',(req,res) =>{
    console.log(req.body)
    res.send('data received')
})

app.listen(3000)