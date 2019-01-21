// Imports
Project = require('./projectModel');

// Handle index actions
exports.index = function (req, res) {
    Project.find(function (err, result) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.send(result);
    });
};

// Handle create project
exports.new = function (req, res) {
    var project = new Project(req.body);
    project.save(function (err, result) {
        if (err) {
            res.json(err);
        }
        res.send(result);
    });
};

// Handle view project
exports.view = function (req, res) {
    Project.findById(req.params.project_id, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
};

// Handle update project
exports.update = function (req, res) {
    Project.findById(req.params.project_id, function (err, project) {
        if (err) {
            res.send(err);
        }
        project.name = req.body.name;
        project.description = req.body.description;
        project.project_chief = req.body.project_chief;
        project.budget = req.body.budget;
        project.begin_date = req.body.begin_date;
        project.end_date = req.body.end_date;
        project.finish = req.body.finish;
        project.intern = req.body.intern;
        project.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.send(project);
        });
    });
};

// Handle delete project
exports.delete = function (req, res) {
    Project.remove({
        _id: req.params.project_id
    }, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: 'Project deleted'
        });
    });
};
