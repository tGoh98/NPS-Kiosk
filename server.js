//server.js

// Require packages
const express = require('express');
const app = express();

// Get access to folders
app.use(express.static('assets'));
app.use(express.static('views'));

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
