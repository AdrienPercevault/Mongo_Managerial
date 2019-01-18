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

// Project routes
router.route('/projects')
    .get(projectController.index)
    .post(projectController.new);

router.route('/projects/:project_id')
    .get(projectController.view)
    .patch(projectController.update)
    .put(projectController.update)
    .delete(projectController.delete);

// Export API routes
module.exports = router;
