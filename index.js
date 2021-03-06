var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 5000; 				// set the port
//var database = require('./config/database'); 			// load the database config
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var urlencodedParser = bodyParser.urlencoded({extended: false});
// configuration ===============================================================
//mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
// app.listen(port);
// console.log("App listening on port " + port);

// app.get('/', function(request, response) {
//  response.send('Hello World!');
//});




app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
  response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function(request, response){

    response.send("<h1>Главная страница</h1>");
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
