const express = require("express");
const router = express.Router();


const {isSignedIn , isAdmin ,isAuthenticated} = require("../controller/auth")
const {getUserById} = require("../controller/user")
const {getProductById,
       createProduct,
       updateProduct,
       getProductByCata
    } = require("../controller/products")


//params 

router.param("UserId",getUserById);
router.param("ProductId", getProductById)


//Routes

router.post("/products/create/:UserId/",
isSignedIn,
isAuthenticated,
isAdmin,
createProduct
);


//update Products 
router.put("/products/:productId/:userId",
isSignedIn,
isAuthenticated,
isAdmin,
updateProduct
)



router.get("/products/:id", getProductByCata);
module.exports = router;