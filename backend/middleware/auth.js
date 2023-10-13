//control seller routes and buyer routes by checking role of the user

const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');
const jwt = require('jsonwebtoken');  //if user doesnt have token in cookies, he MUST login
const User= require('../models/User');


exports.isAuthenticated = catchAsyncErrors(async(req, res, next) => {
    const {token} = req.cookies;

    if(!token) {
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log({decodedToken});

    req.user = await User.findById(decodedToken.id);  //find by id

    next();
})
