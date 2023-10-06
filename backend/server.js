const app = require('./app');
const connectDatabase = require('./db/dbConnect');

//handling uncaught Exceptions(errors)
process.on("uncaughtException", (err)=> {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server for handling uncaught exceptions!');
})

//config
if(process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path:"backend/config/.env"
    })
}

//connect to Database
connectDatabase();

//create server
const server = app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})


//unhandled promise rejection
process.on("unhandledRejection", (err)=> {
    console.log(`Shutting down the server for ${err.message}`);
    console.log('Shutting down the server for unhandled promise rejection!')

    //close the server
    server.close(()=> {
        process.exit(1);
    });
})


