const express = require('express');
const path = require('path');
const router = express.Router();

const User =  require('../models/User');
const {upload} = require('../multer');
const ErrorHandler = require('../utils/ErrorHandler');


router.post('/create-user', upload.single("file"), async (req,res,next) => {
    const {name, email, password} = req.body;

    const userEmail = await User.findOne({email});

    if (userEmail) {
        const filename = req.file.filename;
        const filePath = `uploads/${filename}`;
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

    const newUser = await User.create(user);
     console.log(newUser);

    res.status(201).json({
        success: true,
        newUser,
    })
})

module.exports = router;