// Imports
projectController = require('./projectController');
salarieController = require('./salarieController');
var cors = require('cors')
let express = require('express')
let app = express();
let apiRoutes = require("./api-routes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const path = require('path');

var db = mongoose.connection;
var port = process.env.PORT || 9999;

// Connect to Mongoose and set connection variable (localhost)
mongoose.connect('mongodb://localhost/managerial');
// Connect to Mongoose and set connection variable (server)
// mongoose.connect('mongodb://51.77.215.93/managerial');

app.use(cors());

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
     extended: true
}));
app.use(bodyParser.json());

// Use Api routes in the App
app.use('/api', apiRoutes);

app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	//res.setHeader('Access-Control-Allow-Credentials', true);
	// Pass to next layer of middleware
	next();
});

// Use css files
app.use(express.static(__dirname + '/css'));

// Linx to html file for default url
app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname + '/html/api.html'));
});

// Get form from project to create it
app.post('/api/project', function(req,res){
     projectController.new(req, res);
})

/** FONCTIONNE PAS : TEST POUR LA SUPPRESSION DE PROJET VIA LA PAGE PROJECT ET LE FORMULAIRE / BOUTON DE LA PAGE
// Get id to delete project
app.delete('/api/project', function(req,res){
     projectController.delete(req, res);
})
*/

//Get form from salarie to create it
app.post('/api/salarie', function(req,res){
     salarieController.new(req,res);
})

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running on port " + port);
});
