const express = require('express')
const router = express.Router();
const { body , validationResult } = require('express-validator');
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/test' , (req,res) => {
    res.send('user test route')
})

router.get('/register' , (req,res) => {
    res.render('register')
})

router.post('/register' ,
    body('email').trim().isEmail().isLength({ min : 13}),
    body('password').trim().isLength({ min : 5}),
    body('username').trim().isLength({ min : 3}),
    async (req,res) => {

        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors : errors.array(),
                message : 'Invalid data'
            })
        }
    
    // res.send(errors)

    const { email, username , password}= req.body;

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await userModel.create({
        email,
        username,
        password : hashPassword
    })
    res.json(newUser)
})

router.get('/login' ,(req,res) => {
    res.render('login')
})

// router.post('/login', 
//     body('username').trim().isLength({min : 3}),
//     body('password').trim().isLength({min:5}),
//     async (req,res) => {
//         const errors = validationResult(req);
//         if(!errors.isEmpty()) {
//             return res.status(400).json({
//             errors : errors.array(),
//             message : 'Invalid data'
//         })
//     }
//     const { username, password } = req.body ;

//     const user = await userModel.findOne({
//         username: username
//     })

//     if(!user) {
//         return res.status(400).json({
//             message: 'username  is incorrect'
//         })
//     }


//     const isMatch = await bcrypt.compare(password,user.password);

//     if(!isMatch){
//         return res.status(400).json({
//             message : ' password is incorrect'
//         })
//     }

//     const token = jwt.sign({
//         userId : user._id,
//         email: user.email,
//         username: user.username
//     },
//     process.env.JWT_SECRET,
//     )
//     res.json({
//         token
//     })

//     }
// )


router.post(
  '/login',
  body('username').trim().isLength({ min: 3 }),
  body('password').trim().isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid data',
      });
    }

    const { username, password } = req.body;
    console.log("Login input:", { username, password });

    try {
      const user = await userModel.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: 'Username is incorrect' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Password is incorrect' });
      }

      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
          username: user.username,
        },
        process.env.JWT_SECRET || 'default_secret',
        { expiresIn: '1h' }
      );

      // ✅ Correct way to set token as cookie
      res.cookie('token', token, {
        httpOnly: true, // Prevents access from client-side JS
        maxAge: 3600000 // 1 hour
      });

      res.send('Logged in');
    } catch (error) {
      console.error('Login error:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);



module.exports = router;