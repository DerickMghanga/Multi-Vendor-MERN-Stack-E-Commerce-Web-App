//send response with cookies
const sendToken = (user, statusCode, res) => {
    const token = user.getJwtToken();   //from userSchema methods '../models/User.js'

    //options for cookies
    const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000 ),  //90 days
        httpOnly: true,        
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    })
}

module.exports = sendToken;