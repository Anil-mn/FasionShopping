const express = require('express');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");


const app = express();

//primary route
app.get("/", (req, res) => {
    res.send("Online Shopping");
  });

//bring all routes
const auth = require("./routes/api/auth");
const products = require("./routes/api/products");

//Middleware for bodyparser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//mongoDB configuration
const db = require("./setup/myurl").mongoURL;

//connect to database
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));

  //actual routes
app.use("/api/auth", auth);
app.use("/api/products",  products);

//port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App is running at ${port}`));