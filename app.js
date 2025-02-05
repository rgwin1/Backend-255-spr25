

//A: 
//set.. this is similar to when we use our default tags in html
const express = require('express'); //name of the express module can be used to do express things
//activate or tell this app variable to be an express server
const app = express(); //an activated express server. can you the express app functionality

//start the web server...app.listen(portnumber, function);
app.listen(3000, function(){
    console.log('listening on port 3000') //a log to make sure the server is running
})


//B: making an api using routes
//GET or a regular request when someone goes to https://localhost:3000/hello...endpoint of url
app.get("/hello", function(req, res){
    //B1
    res.send("<h1>Hello, Express</h1>")
});

app.get("/goodbye", function(req, res){
    //B1
    res.send("<h1>Goodbye, Express</h1>")
});

