const express = require("express");
const router = express.Router();

const {isSignedIn, isAdmin, isAuthenticated} = require('../controller/auth')

const {getUserById} = require('../controller/user')

const {
    getCategoryById,
    createCategory,
    getCategory,
    getAllCategory
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

module.exports = router;