// Imports
let router = require('express').Router();
var projectController = require('./projectController');
var salarieController = require('./salarieController');
const path = require('path');
let express = require('express')
let app = express();

// Link API html page
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/api.html'));
});

// Link Project html page
router.get('/project', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/project.html'));
});

//link Salarie html page
router.get('/salarie', function(req, res){
    res.sendFile(path.join(__dirname + '/html/salarie.html'));
})

// // Link Projects html page
// router.get('/projects', function (req, res) {
//     res.sendFile(path.join(__dirname + '/html/projects.html'));

// // Get projects list
// router.get('/projects', function(req,res){
//     projects = projectController.index(req, res);
//     console.log("bonjour" + projects);
//     res.render(__dirname + '/html/projects.html', {projects: projects});
// })

// Project routes
router.route('/projects')
    .get(projectController.index)
    .post(projectController.new)
    .delete(projectController.delete);

router.route('/projects/:project_id')
    .get(projectController.view);

router.route('/projects/delete/:project_id')
    // .get(projectController.view)
    .get(projectController.delete);

//salarie routes
router.route('/salaries')
    .get(salarieController.index)
    .post(salarieController.new);

router.route('/salaries/:salarie_id')
    .get(salarieController.view)
    .patch(salarieController.update)
    .put(salarieController.update)
    .delete(salarieController.delete);

// Export API routes
module.exports = router;
