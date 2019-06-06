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
  const jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const dom = new JSDOM(``, {
    url: "http://localhost:8000/",
    // referrer: "https://example.com/",
    // contentType: "text/html",
    // includeNodeLocations: true,
    // storageQuota: 10000000
  });
  // const { window } = new JSDOM();
  const { document } = dom.window;
  global.document = document;
  var e = document.getElementById("state");
  console.log(e);
  // var stateCode = e.options[e.selectedIndex].text;
  // console.log(stateCode);

  //console.log(stateCode);
  //let parkCode = req.body.parkCode;

  let data = 'parks';
  let stateCode = 'tx';
  let q = req.body.q;
  // let url = `https://developer.nps.gov/api/v1/${data}?stateCode=${stateCode}?q=${q}&api_key=${apiKey}`;
  // let url = `https://developer.nps.gov/api/v1/${data}?stateCode=${stateCode}?&api_key=${apiKey}`; //works
  let url = `https://developer.nps.gov/api/v1/${data}?stateCode=${stateCode}?&api_key=${apiKey}`;

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
