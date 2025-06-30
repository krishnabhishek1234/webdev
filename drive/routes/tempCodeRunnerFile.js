const isMatch = await bcrypt.compare(password,user.password)

    // if(!isMatch){
    //     return res.status(400).json({
    //         message : ' password is incorrect'
    //     })
    // }

    // const token = jwt.sign({
    //     userId : user._id,
    //     email: user.email,
    //     username: user.username
    // },
    // process.env.JWT_SECRET,
    // )
    // res.json({
    //     token
    // })
