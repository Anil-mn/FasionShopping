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
const user = require("./routes/user");
const cate = require("./routes/category");
const products = require("./routes/products");
//const products = require("./routes/api/products");



//Middleware for bodyparser
// app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
app.use("/api", auth);
app.use("/api", user);
app.use("/api", cate);
app.use("/api", products);
//app.use("/api/products",  products);

//port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is running at ${port}`));