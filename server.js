//server.js

//node packages
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

//get API key
require('dotenv').config();
const apiKey = process.env.API_KEY;

//get access to public folder
app.use(express.static('assets'));
//access bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
//set index.ejs
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index');
  console.log("at get");
})

app.post('/', function (req, res) {
  let stateCode = 'tx'; //replace with select value
  let q = req.body.q;
  let url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&q=${q}&api_key=${apiKey}`;

  request(url, function (err, response, body) {
    if(err){
      //res.render('index', {weather: null, error: 'Error, please try again'});
      console.log("error");
    } else {
      console.log(JSON.parse(body));
      console.log("success");
      // let weather = JSON.parse(body)
      // if(weather.main == undefined){
      //   res.render('index', {weather: null, error: 'Error, please try again'});
      // } else {
      //   let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      //   res.render('index', {weather: weatherText, error: null});
      // }
    }
  });
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
})
