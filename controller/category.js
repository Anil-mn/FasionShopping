const Category = require("../model/category");



exports.getCategoryById = (req,res,next,id) =>{
   Category.findById(id).exec((err,cate)=>{
    if (err) {
        return res.status(400).json({
          error: "Category not found in DB"
        });
      }
      req.category = cate;
      next();
   })
}


exports.createCategory = (req,res) =>{
    const category = new Category(req.body);
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error: "NOT able to save category in DB"
              });
        }
        res.json({ category });
    })
}

exports.getCategory = (req,res)=>{
    return res.json(req.category);
}

exports.getAllCategory = (req,res) => {
    Category.find().exec((err, categories) => {
        if (err) {
          return res.status(400).json({
            error: "NO categories found"
          });
        }
        res.json(categories);
      });

}


exports.updateCategory = (req,res) => {
    Category.findOneAndUpdate(
        {_id:req.category._id},
        {$set : req.body},
        { new: true, useFindAndModify: false },
        (err, cata) => {
            if (err) {
              return res.status(400).json({
                error: "You are not authorized to update this user"
              });
            } res.json(cata);
          }
        )
}


exports.removeCategory = (req, res) => {
    const category = req.category;
  
    category.remove((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this category"
        });
      }
      res.json({
        message: "Successfull deleted"
      });
    });
  };
