const Product = require("../model/products");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProductById = (req,res,next,id) => {
    Product.findById(id)
    .populate("category")
    .exec((err,product)=>{
        if(err){
            return res.status(400).json({Message:"Not FOund"})
        }
        req.product = product;
        next();
    })
}

exports.createProduct = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(err,fields,file)=>{
        if(err){
            return res.status(400).json({Upload:"Upload error"})
        }
        //destructure the fields
    const { name, description, price, category, stock } = fields;

    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({
        error: "Please include all fields"
      });
    }
       const product = new Product(fields);


       //handle file here
    if (file.photo) {
        if (file.photo.size > 3000000) {
          return res.status(400).json({
            error: "File size too big!"
          });
        }
        product.photo.data = fs.readFileSync(file.photo.path);
        product.photo.contentType = file.photo.type;
      }

      product.save((err,product)=>{
        if(err){
            return res.status(400).json({Message:"Not uploded to DB"})
        }
        res.json(product);
      })
    })
}


exports.updateProduct = (req,res) => {
    let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image"
      });
    }

    //updation code
    let product = req.product;
    product = _.extend(product, fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!"
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }
    // console.log(product);

    //save to the DB
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "Updation of product failed"
        });
      }
      res.json(product);
    });
  });
}


