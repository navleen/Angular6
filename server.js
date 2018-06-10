// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Parsers for POST data
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
var port;
var server_detail = {};
console.info("ENV is ::", process.env.ENV);
if (!process.env.PORT) { console.info("PORT :: undefined, using defaults") }

var environment = process.env.ENV || 'development';
if (environment === 'production') {
  port = 8056;
  server_detail = { host: "", api_port: 443, protocol: "https://", env: "production" }
} else if (environment === 'staging') {
  port = 8056;
  server_detail = { host: "", api_port: 80, protocol: "http://", env: "staging" }
} else {
  port = 8056;
  server_detail = { host: "", api_port: 6600, protocol: "http://", env: "others" }
}


// Define and set API routes
require('./server/routes')(app, server_detail, path,console);

// Catch all other routes and return the index file


/**
 * Get port from environment and store in Express.
 */

app.set('port', port);


app.set('view engine', 'html'); // set up html for templating
app.engine('.html', require('ejs').__express);
// console.info(__dirname);
app.set('views', __dirname + '/dist');
app.use(express.static(path.join(__dirname, 'dist/shimla')));
var methodOverride = require('method-override')
var json = require('express-json')
var urlEncoded = require("body-parser");
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(json);
app.use(urlEncoded);
app.use(cors); // for allowing cross origin calls
console.info("Static path ", path.join(__dirname, '/dist'));

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () { console.info('Server running on....', port) });

