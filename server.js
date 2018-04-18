const React = require('react');
const ReactDOM = require('react-dom');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

// Set up express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/gladiatorsludi');
mongoose.Promise = global.Promise;

app.use(express.static('public')); // every components / containers to be added in public

app.use(bodyParser.json());

// Initialize routes
app.use('/api', require('./routes/api'));

// Error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({err: err.message});
});

// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("Ready to accept request");
});
