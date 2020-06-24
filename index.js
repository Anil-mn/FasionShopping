require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");



//primary route
app.get("/", (req, res) => {
    res.send("Online Shopping");
  });



  
//bring all routes
const auth = require("./routes/auth");
//const products = require("./routes/api/products");



//Middleware for bodyparser
// app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//mongoDB configuration
//const db = require("./setup/myurl").mongoURL;


//mogo db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  //actual routes
app.use("/auth", auth);
//app.use("/api/products",  products);

//port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is running at ${port}`));