//var bodyParser = require("body-parser");
var express = require("express");


// Sets the Express App

var app = express();

//what port to use
var PORT = process.env.PORT ||3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start listenign on that port
app.listen(PORT, function() {
    console.log("Port at: " + PORT);             
})

