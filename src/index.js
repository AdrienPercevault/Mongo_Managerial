// Imports
projectController = require('./projectController');
salarieController = require('./salarieController');

ProjectModel = require('./projectModel')
SalarieModel = require('./salarieModel')

var cors = require('cors')
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const path = require('path');

var port = process.env.PORT || 9999;
const managerial = mongoose.connection;

// Connect to Mongoose and set connection variable (localhost)
mongoose.connect('mongodb://localhost/managerial', { useNewUrlParser: true });
// Connect to Mongoose and set connection variable (server)
// mongoose.connect('mongodb://51.77.215.93/managerial', { useNewUrlParser: true });

// Use cors
app.use(cors());

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
     extended: true
}));
app.use(bodyParser.json());

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

// *************
// ***PROJECT***
// *************

// Affichage
app.get('/api/projects', projectController.index);

// Get form from project to create it
app.post('/api/projects', projectController.new);

// Delete project
app.delete('/api/projects/:project_id', projectController.delete);

// Update project
app.put('/api/projects/:project_id', projectController.update);

// Get project by id
app.get('/api/projects/:project_id', projectController.view);

// *************
// ***SALARIE***
// *************

// Affichage
app.get('/api/salaries', salarieController.index);

// Get form from salarie to create it
app.post('/api/salaries', salarieController.new);

// Delete salarie
app.delete('/api/salaries/:salarie_id', salarieController.delete);

// Update salarie
app.put('/api/salaries/:salarie_id', salarieController.update);

// Get salarie by id
app.get('/api/salaries/:salarie_id', salarieController.view);

// *************

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running on port " + port);
});
