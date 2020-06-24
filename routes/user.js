const express = require("express");
const router = express.Router();


const {getUserById, getUser , updateUser} = require('../controller/user')
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");
const { model } = require("../model/user");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);


module.exports = router;