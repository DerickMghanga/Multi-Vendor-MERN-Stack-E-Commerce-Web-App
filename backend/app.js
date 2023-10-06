const express = require('express');
const ErrorHandler = require('./utils/ErrorHandler');
const app = express();
const cookiesParser = require('cookie-parser');
const bodyParser = require('body-parser');  //for POST requests(Google)
const fileUpload = require('express-fileupload');  //file uploads

app.use(express.json());
app.use(cookiesParser);
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload({useTempFiles: true}));

//config
if(process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

//error handling
app.use(ErrorHandler);

module.exports = app;