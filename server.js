require("dotenv").config();
const express = require('express');
const { join } = require('path');
const morgan = require('morgan');
const mongoose = require("mongoose");
const routes = require("./utils");
const app = express();

app.use(morgan("dev"));
// Serve the static files from the React app
app.use(express.static(join(__dirname, 'client/build')));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.use(routes);

// Connect to the Mongo DB

// For WiFi w/o access to mLab
// mongoose.connect("mongodb://localhost/vendorlist" || process.env.MONGODB_URI);

// For WiFi w/o restrictions
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vendorlist");


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);