// Node Dependencies //

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express App //
var app = express();
var PORT = process.env.PORT || 8080;

// Set up Express App to handle parsing //
app.use(express.static(__dirname + "/App/css"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Add the App routes //
require(path.join(__dirname,"./App/Routing/apiRoutes.js"))(app);
require(path.join(__dirname,"./App/Routing/htmlRoutes.js"))(app);

// Start listening on PORT //
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});