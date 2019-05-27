//server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//get access to public folder
app.use(express.static('public'));
//access bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
//set index.ejs
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index');
})
app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
