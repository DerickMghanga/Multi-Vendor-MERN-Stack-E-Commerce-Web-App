// ERROR HANDLING

const ErrorHandler = require('../utils/ErrorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal server error'

    //incase of wrong mongodb id (error)
    if(err.name === 'CastError') {
        const message = `Resources not found with this id... Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    //duplicate keys error ie email sign up
    if(err.code === 11000) {
        const message = `Duplicate key ${Object.keys(err.keyValue)} Entered!`;
        err = new ErrorHandler(message, 400);
    }

    //wrong jwt error
    if (err.name === 'JsonWebTokenError') {
        const message = `Your url is invalid. Please try again later`
        err = new ErrorHandler(message, 400);
    }

    // jwt expired
    if(err.name === 'TokenExpiredError') {
        const message = 'Your Url has expired please try again later'
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })
}