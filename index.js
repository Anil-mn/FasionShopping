var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const jsonwt = require("jsonwebtoken");
const passport = require("passport");

//bring all routes
const auth = require("./routes/api/auth");
const insert = require("./routes/api/insert");
const main = require("./routes/api/main");


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/', function (req, res) {
    res.send('Nectar 2020 ')
  })
  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


//Middleware for bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongoDB configuration
const db = require("./setup/myurl").mongoURL;

//Attempt to connect to database

//mongoose
//.connect(db,{useNewUrlParser: true})
mongoose
  .connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));


  //Passport middleware
app.use(passport.initialize());

//Config for JWT strategy
require("./strategies/jsonwtStrategie")(passport);


  //actual routes
app.use("/api/auth", auth);
app.use("/api/insert", insert);
app.use("/api/main", main);

app.listen(5000,()=> console.log("server is running on port 5000"))