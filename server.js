//server.js

// Node packages
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

// Get API key
require('dotenv').config();
const apiKey = process.env.API_KEY;

// Get access to folders
app.use(express.static('assets'));
app.use(express.static('views'));
// Access bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// Set index.ejs
app.set('view engine', 'ejs');

// Render index on page load
app.get('/', function (req, res) {
  res.render('index', {anchor: false});
})

// Called when search form submitted
app.post('/', function (req, res) {
  // Construct api call
  let stateCode = 'tx'; //replace with select value
  let q = req.body.q;
  let url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&q=${q}&api_key=${apiKey}`;

  // Call api
  request(url, function (err, response, body) {
    if(err){
      //res.render('index', {weather: null, error: 'Error, please try again'});
      console.log("error");
    } else {
      console.log(JSON.parse(body));
      console.log("success");

      res.render('index', {anchor: true});

      // if(weather.main == undefined){
      //   res.render('index', {weather: null, error: 'Error, please try again'});
      // } else {
      //   let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      //   res.render('index', {weather: weatherText, error: null});
      // }
    }
  });
})


// Start server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
})
