const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jsonwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../setup/myurl");


// @type    GET
//@route    /api/auth
// @desc    just for testing
// @access  PUBLIC
router.get("/", (req, res) => res.json({ test: "Auth is being tested" }));

const User = require('../../model/user');


// @type    Post
//@route    /api/auth/register
// @desc    Register a user
// @access  PUBLIC

router.post('/register',(req,res)=>{
    User.findOne({email: req.body.email})
    .then(user=>{
             if(user)
             {
                 return res
                 .status(400)
                 .json({emailError:'This Email Already exisit'})
             }
             else{
                 const newUser = new User({
                    name: req.body.name,
                    phone: req.body.phone,
                    password: req.body.password,
                    email: req.body.email,
                    gender: req.body.gender,
                    dob : req.body.dob
                 })
                 // Encypt USING bycrypt
                 bcrypt.genSalt(10, (err, salt) => {
                     bcrypt.hash(newUser.password, salt, (err, hash) => {
                       if (err) throw err;
                       newUser.password = hash;
                       newUser
                         .save()
                         .then(person => res.json(person))
                         .catch(err => console.log(err));
                     });
                   });
                 }
    })
    .catch(err=> console.log(err))
})

// @type    Post
//@route    /api/auth/login
// @desc    login for a user
// @access  PUBLIC

router.post('/login',(req,res)=>{
    const phone = req.body.phone;
    const password = req.body.password;
    User.findOne({phone})
    .then(user=>{
        if(!user){
           return res
           .status(404)
           .json({User:'User Not Found Please Registert'})
        }
        bcrypt
        .compare(password, user.password)
        .then(IsCorrect =>
            {
                if(IsCorrect){
                    res.json({ success: "User is able to login successfully" });
                    //use payload and create token for user
                }
                else
                {

                   res.status(400).json({ passworderror: "Password is not correct" });
                 }
            
        })
        .catch(err => console.log(err));


    }
      
    )
    .catch(err=>console.log(err))
})

module.exports = router;