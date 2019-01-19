// Imports
let router = require('express').Router();
var projectController = require('./projectController');
const path = require('path');

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
// });

// Project routes
router.route('/projects')
    .get(projectController.index)
    .post(projectController.new);

router.route('/projects/:project_id')
    .get(projectController.view)
    .patch(projectController.update)
    .put(projectController.update)
    .delete(projectController.delete);

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
