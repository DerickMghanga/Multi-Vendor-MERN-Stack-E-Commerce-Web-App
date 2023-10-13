const express = require('express');
const ErrorHandler = require('./middleware/error');
const app = express();
const cookiesParser = require('cookie-parser');
const bodyParser = require('body-parser');  //for POST requests(Google)
const cors = require('cors'); // authorisation of requests(client-server);

app.use(cors({
    origin: "http://localhost:3000",   //front-end
    credentials: true,
}));
app.use(express.json());
app.use(cookiesParser());
app.use("/", express.static("uploads")); // public access to upload folder with images
app.use(bodyParser.urlencoded({extended: true}));

//config Environment variables
if(process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

//import routes handlers(controllers)
const user = require('./controller/user');

// api routes
app.use('/api/v2/user', user);

//error handling
app.use(ErrorHandler);

module.exports = app;