//server.js

// Reuuire packages
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

// Get API key
// require('dotenv').config();
// const apiKey = process.env.API_KEY;

// Get access to folders
app.use(express.static('assets'));
app.use(express.static('views'));
// Access bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// Set index.ejs
app.set('view engine', 'ejs');

// Render index on page load
app.get('/', function (req, res) {
  res.render('index');
})

// Start server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
})
