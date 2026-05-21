const express =require("express");
const authController=require("../AuthController/auth.controller")

const router = express.Router()


router.post("/register",authController.registerUser)


router.post("/login",authController.Userlogin)


//beginner level par hai
router.post("/logout",authController.logoutUser)




module.exports=router