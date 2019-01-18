// Imports
let express = require('express')
let app = express();
let apiRoutes = require("./api-routes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const path = require('path');

var db = mongoose.connection;
var port = process.env.PORT || 9999;

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/managerial');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
     extended: true
  }));
app.use(bodyParser.json());

// Use Api routes in the App
app.use('/api', apiRoutes)

// Linx to html file for default url
app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname + '/html/project.html'));
});
//recupere le le formulaire sur project il reste a l'envoyer dans project.json
app.post('/',function(req,res){
     console.log(req.body);
     res.redirect('/');
})

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running on port " + port);
});