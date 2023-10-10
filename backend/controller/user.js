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
        const fileUrl = path.join(filename);

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
    return jwt.sign(user, process.env.ACTIVATION_SECRET, { expiresIn:'5min' });
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

module.exports = router;