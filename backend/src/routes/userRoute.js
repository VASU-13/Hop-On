const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

// Signup New User
router.post('/signup',async(req,res)=>{
    try {
        const existingUser = await User.findOne({email: req.body.email});
        if(existingUser) {
            return res.send({
                message: 'User Already Exists',
                success: false
            });
        }
        const hashPassword = await bcrypt.hash(req.body.password,10);
        req.body.password = hashPassword;
        const newUser = new User(req.body);
        await newUser.save();
        res.send({
            message: "User created successfully",
            success: true,
            data: null
        })
    }
    catch {
        res.send({
            message: error.message,
            success: false,
            data: null
        })
    }
});

// login user

router.post('/login',async(req,res)=>{
    try {
        const userExists = await User.findOne({email: req.body.email});
        if(!userExists) {
            return res.send({
                message: "User does not exists",
                success: false,
                data: null,
            })
        }
        const passwordMatch = await bcrypt.compare(
            req.body.password,
            userExists.password
        )
        if(!passwordMatch) {
            return res.send({
                message: "Incorrect password",
                success: false,
                data: null,
            })
        }
        const token = jwt.sign({
            userId: userExists._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        res.send({
            message: "User Logged in Successfully",
            success: true,
            data: token
        })
    }
    catch (error) {
        return res.send({
            message: error.message,
            success: false,
            data: null,
        })
    }
}); 

// get user by id
router.post("/get-user-by-id",authMiddleware,async(req,res)=>{
    try {
        const user = await User.findById(req.body.userId);
        res.send({
            message: "User fetched successfully",
            success: true,
            data: user
        })
    }
    catch (error) {
        res.send({
            message: error.message,
            success: false,
            data: null
        })
    }
})

module.exports = router;
