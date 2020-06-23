const express = require("express");
const router = express.Router();
const key = require("../../setup/myurl");



// @type    GET
//@route    /api/auth
// @desc    just for testing products
// @access  PUBLIC
router.get("/", (req, res) => res.json({ test: "Products Api" }));

const Products = require('../../model/products');

router.post('/insert',(req,res)=>{
    Products.findOne({name: req.body.name})
    .then(product =>{
        if(product)
        {
            return res
            .status(400)
            .json({Error:"Product already inserted"})
        }
        else
        { 
            const newProduct = new Products({
            name: req.body.name,
            price: req.body.price,
            discription: req.body.discription,
            image: req.body.image,
            category: req.body.category
            })
            newProduct
            .save()
            .then(prod => res.json(prod))
            .catch(err => console.log(err));

        }
    })
    .catch(err=>console.log(err))
})


module.exports = router;