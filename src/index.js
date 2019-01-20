// Imports
projectController = require('./projectController');
salarieController = require('./salarieController');
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

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
     extended: true
}));
app.use(bodyParser.json());

// Use Api routes in the App
app.use('/api', apiRoutes);

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