//control seller routes and buyer routes by checking role of the user

const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');
const jwt = require('jsonwebtoken');  //if user doesnt have token in cookies, he MUST login

