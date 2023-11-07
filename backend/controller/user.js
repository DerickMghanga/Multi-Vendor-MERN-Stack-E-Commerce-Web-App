const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');

const User =  require('../models/User');
const {upload} = require('../multer');
const ErrorHandler = require('../utils/ErrorHandler');
const sendMail = require('../utils/sendMail');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');
const { isAuthenticated } = require('../middleware/auth');   //check cookies in the token


router.post('/create-user', upload.single("file"), async (req,res,next) => {

    try {
        const {name, email, password} = req.body;

        const userEmail = await User.findOne({email});

        if (userEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;

            fs.unlink(filePath, (err) => {   //delete the file(image) if user exists
                if (err) {
                    console.log(err);
                    res.status(500).json({message: "Error deleting the file"});
                }
            });

            return next(new ErrorHandler("User already exists!", 400));
        }

        const filename = req.file.filename;
        const fileUrl = path.join(filename);   //get the file path

        const user = {
            name: name,
            email: email,
            password: password,
            avatar: fileUrl,
        };
        // console.log(user);

        //create activation token
        const activationToken = createActivationToken(user);

        const activationURL = `http://localhost:3000/activation/${activationToken}`;

        try {
            await sendMail({   //shoot an email to the user
                email: user.email,
                subject: 'Activate your account' ,
                message: `Hello ${user.name}, please click the link to activate your account: ${activationURL}`
            });

            res.status(201).json({
                success: true,
                message: `Please check your email: ${user.email} to activate your account`
            })
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }

    } catch (error) {
            return next(new ErrorHandler(error.message, 400));
    }
});

//create Activation Token
const createActivationToken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, { expiresIn:'10min' });
}


//activate user from email sent with token
router.post('/activation', catchAsyncErrors(async(req, res, next) => {
    try {
        // console.log(req.body);
        const {token} = req.body;

        const newUser = jwt.verify(token, process.env.ACTIVATION_SECRET);

        if(!newUser) {
            return next(new ErrorHandler("Invalid token", 400));
        }

        const {name, email, password, avatar} = newUser;

        const user = await User.findOne({email});

        if(user) {
            return next(new ErrorHandler("User already exists", 400));
        }

        const createdUser = await User.create({
            name,
            email,
            avatar,
            password,
        });

        // res.status(201).json({
        //     success: true,
        //     message: "User created successfully!"
        // })
        sendToken(createdUser, 201, res);

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}))


//Login user
router.post("/login-user", catchAsyncErrors(async(req, res, next) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return next(new ErrorHandler("Please provide all the fields!", 400));
        }

        const user = await User.findOne({email}).select("+password");  //forcefully include the password

        if(!user) {
            return next(new ErrorHandler("User does not exist!", 400))
        }

        const isPasswordValid = await user.comparePassword(password);  //from userSchema methods '../models/User.js'

        if(!isPasswordValid) {
            return next(new ErrorHandler("Please provide the correct credentials", 400));
        }

        sendToken(user, 201, res);  //create token sent as cookie to client

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}))


//load user(authorisation to access hoemapage unless you login)
router.get("/getuser", isAuthenticated, catchAsyncErrors(async(req, res, next) => {
    try {
        // console.log(req.user);
        const user = await User.findById(req.user._id);  //'req.user' from isAuthenticated

        if(!user) {
            return next(new ErrorHandler("User does not exist!", 400));
        }

        res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}))

module.exports = router;