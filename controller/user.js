const User = require("../model/user");


//middleware
exports.getUserById = (req,res,next,id) => {
 User.findById(id).exec((err,user)=>{
     if(err || !user){
         return res.status(400)
         .json({
             NotFound : "This User Id not Found in DB"
         })
     }
     req.profile = user;
     next();
 })
}
exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined
    return res.json(req.profile);
  };
  
exports.updateUser = (req,res) => {
    User.findOneAndUpdate(
        {_id:req.profile._id},
        {$set : req.body},
        { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to update this user"
        });
      }
      user.salt = undefined;
      user.encry_password = undefined;
      res.json(user);
    }
  );
}