const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// general purpose middleware
app.use(morgan('dev')); // logging
app.use(bodyParser.json()); // body-parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public'))); // static

// server.js
app.use('/api', require('./api')); // all requests to api

// send index.html for any non-api requests
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// catch 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// listen for requests
const port = process.env.PORT || 3000; // process.env.PORT for heroku
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});