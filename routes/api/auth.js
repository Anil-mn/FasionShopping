const express = require("express");
const router = express.Router();
const key = require("../../setup/myurl");
const jsonwt = require("jsonwebtoken");
const passport = require("passport");




router.get("/", (req, res) => res.json({ test: "Auth is being tested" }));


//Import Schema for user to Register
const user = require("../../models/user");


//register

router.post('/register',(req,res)=>{
    user.findOne({email:req.body.email})
    .then(person => {
        if (person) {
          return res
            .status(400)
            .json({ emailerror: "Email is already registered in our system" });
        }
        else
        {
            const newUser =new user({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            })
            newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
            

        }
    })
})


router.post("/login",(req,res)=>{
    const email = req.body.email
   
    user.findOne({email})
    .then(user=>{
        if(!user)
        {
            return res.status(400)
            .json({email:"User Not found"})
        }
          const data = {
              id: user.id,
              name: user.name,
              phone: user.phone
          };
          jsonwt.sign(data, key.secret,{ expiresIn: 3600 },(err,token)=>{
            res.
            status(200).
            json({
                success: true,
                token: "Bearer " + token
              });
          })
    }
        
    )
    .catch(err=>console.log(err))
})


router.get("/profile",passport.authenticate("jwt", { session: false }),(req,res)=>{
res.json({
    id: req.user.id,
    name: req.user.name,
    phone: req.user.phone
})
})

module.exports = router;