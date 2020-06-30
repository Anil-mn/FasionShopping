const express = require("express");
const router = express.Router();

const {isSignedIn, isAdmin, isAuthenticated} = require('../controller/auth')

const {getUserById} = require('../controller/user')

const {
    getCategoryById,
    createCategory,
    getCategory,
    getAllCategory,
    updateCategory,
    removeCategory,
    getProductByCata
} = require('../controller/category')


//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

router.post("/category/create/:userId", 
isSignedIn,
isAuthenticated,
isAdmin,
createCategory
);

router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);


//update
router.put(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateCategory
  );

  router.delete(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeCategory
  );





module.exports = router;