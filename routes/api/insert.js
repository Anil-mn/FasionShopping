const express = require("express");
const router = express.Router();
const key = require("../../setup/myurl");


// Main route
// api/insert
router.get("/", (req, res) => res.json({ test: "mainPage is Tested" }));


//Import Schema for session to insert
const session = require("../../models/session");

router.post('/session',(req,res) =>{
      session.findOne({name:req.body.name})
      .then(section =>{
          if(section){
              res.status(400)
              .json({ sessionerror: "this Session is already registered in our system" });
          }
          else {
              const newSession = new session({
                  name : req.body.name,
                  subName: req.body.subName,
                  image: req.body.image
              })
              newSession
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          }
      })

})
module.exports = router;