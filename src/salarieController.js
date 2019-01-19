//imports
Salarie = require('./salarieModel');

//Handle index actions
exports.index = function (req, res){
    Salarie.get(function (err, salaries){
        if(err){
            res.json({
                status: "error",
                message:err,
            });
        }
        res.json({
            status:"sucess",
            message: "Salaries retrieved successfully",
            data: salaries
        });
    });
};

// Handle create salarie
exports.new = function(req,res){
    var salarie = new Salarie();
    salarie.name = req.body.name;
    salarie.birth = req.body.birth;
    salarie.connection = req.body.connection;
    salarie.information = req.body.information;
    salarie.save(function(err){
        if(err){
            res.json(err);
        }
        res.redirect('/api/salaries');
    });
};

//Handle view salarie
exports.view = function (req,res){
    Salarie.findById(req.params.salarie_id, function(err,salarie){
        if (err){
            res.send(err);
        }
        res.json({
            message: 'Salarie details loading ...',
            data:salarie
        });
    });
};

//Handle update salarie
exports.update = function(req,res){
    Salarie.findById(req.params.salarie_id, function (err, salarie){
        if (err){
            res.send(err);
        }
        salarie.name = req.body.name;
        salarie.birth = req.body.birth;
        salarie.connection = req.body.connection;
        salarie.information = req.body.information;
        salarie.save(function(err){
            if(err){
                res.json(err);
            }
            res.json({
                message: 'Salarie info updated',
                data:salarie
            });
        });
    });  
};

//Handle delete salarie
exports.delete = function (req,res){
    Salarie.remove({
        _id:req.params.salarie_id
    }, function (err, salarie){
        if (err) {
            res.send(err);
        }
        res.json({
            status: "sucess",
            message:'Salarie deleted'
        });
    });
};