// ===========================================================================
// Dependencies
// ===========================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ===========================================================================
// Express Server
// ===========================================================================
var app = express();

//port setting for local testing and server
var PORT = process.env.PORT || 8080;

// static assets
app.use(Express.static(Path.join(__dirname, "app/public")));
	
// implement bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ===========================================================================
// Routes
// ===========================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ===========================================================================
// Server Listening 
// ===========================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});