//Importing Core Modules
// const http = require("http");

//Installing 3rd Party packages
const express = require("express");

const app = express();

//Use allows us to add a middleware function
//function passed to use will execute for all incoming requests
// Next is a function passed into the use function which allows 
// the rquest to pass onto the next middleare
app.use((req, res, next) => {
    console.log("In the middleware");
    next(); // Allows the request to continue to next middleware in line
})

app.use((req, res, next) => {
    console.log("Another middleware");
    res.send('<h1> Hello from Express !! </h1>');

})

// const server = http.createServer(app);

// server.listen(4000);

app.listen(4000);
