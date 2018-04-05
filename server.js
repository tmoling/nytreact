//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/articleroutes.js");
const app = express();
const request = require("request");
const PORT = process.env.PORT || 3000;
const db=require("./models/Articles.js");
const router = require("express").Router();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI,{useMongoClient: true});

// listen on port 3000
app.listen(PORT, function() {
 console.log(`🌎  ==> now listening on PORT ${PORT}!`);
});

