// Imports
Salarie = require('./salarieModel');

// Handle index actions
exports.index = function (req, res) {
    Salarie.get(function (err, salaries) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(salaries);
    });
};

// Handle create salarie
exports.new = function (req, res) {
    var salarie = new Salarie();
    salarie.lastname = req.body.lastname;
    salarie.firstname = req.body.firstname;
    salarie.birthday = req.body.birthday;
    salarie.birthplace = req.body.birthplace;
    salarie.ethnic = req.body.ethnic;
    salarie.login = req.body.login;
    salarie.password = req.body.password;
    salarie.email = req.body.email;
    salarie.gender = req.body.gender;
    salarie.role = req.body.role;
    salarie.manager = req.body.manager;
    salarie.vacation = req.body.vacation;
    salarie.hire_date = req.body.hire_date;
    salarie.fire_date = req.body.fire_date;
    salarie.Salary = req.body.Salary;
    salarie.save(function (err) {
        if (err) {
            res.json(err);
        }
        res.redirect('/api/salaries');
    });
};

// Handle view salarie
exports.view = function (req, res) {
    Salarie.findById(req.params.salarie_id, function (err, salarie) {
        if (err) {
            res.send(err);
        }
        res.send(salarie);
    });
};

// Handle update project
exports.update = function (req, res) {
    Salarie.findById(req.params.salarie_id, function (err, salarie) {
        if (err) {
            res.send(err);
        }
        salarie.lastname = req.body.lastname;
        salarie.firstname = req.body.firstname;
        salarie.birthday = req.body.birthday;
        salarie.birthplace = req.body.birthplace;
        salarie.ethnic = req.body.ethnic;
        salarie.login = req.body.login;
        salarie.password = req.body.password;
        salarie.email = req.body.email;
        salarie.gender = req.body.gender;
        salarie.role = req.body.role;
        salarie.manager = req.body.manager;
        salarie.vacation = req.body.vacation;
        salarie.hire_date = req.body.hire_date;
        salarie.fire_date = req.body.fire_date;
        salarie.Salary = req.body.Salary;
        salarie.save(function (err) {
            if (err) {
                res.json(err);
            }
            res.send(salarie);
        });
    });
};

// Handle delete salarie
exports.delete = function (req, res) {
    Salarie.remove({
        _id: req.params.salarie_id
    }, function (err, salarie) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: 'Project deleted'
        });
    });
};
