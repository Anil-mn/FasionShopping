const express = require("express");
const router = express.Router();
const key = require("../../setup/myurl");


// Main route
// api/main
router.get("/", (req, res) => res.json({ test: "mainPage is Tested" }));

//Import Schema for session to insert
const session = require("../../models/session");

router.get("/session",(req,res)=>{
    session.find()
    .then(section => {
        res.json(section)
    })
    
})

module.exports = router;


