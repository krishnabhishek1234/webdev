const mongoose=require('mongoose')

const connection = mongoose.connect('mongodb://0.0.0.0/men').then(() =>{
    console.log("connected to data base")
})

// const connection = mongoose.connect('mongodb+srv://madhasia2002abhishek:madhasia2002abhishek@cluster0.lwcwfo7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() =>{
//     console.log("connected to data base")
// })


module.exports =connection

