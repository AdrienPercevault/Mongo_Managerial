const mongoDBClient = require('./mongo.connector')
const express = require ('express');
const router = express.Router();

const fs = require('fs');

router.get('/', (req, res) => {
    mongoDBClient.db.collection('projets').find({}).toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error))
});

router.post('/', (req, res) => {    
    var id = document.getElementById("id").value
    var name = document.getElementById("name").value
    var description = document.getElementById("description").value
    var project_chief = document.getElementById("project_chief").value
    var budget = document.getElementById("budget").value
    var begin_date = document.getElementById("begin_date").value
    var end_date = document.getElementById("end_date").value
    var finish = document.getElementById("finish").value
    var intern = document.getElementById("intern").value

    mongoDBClient.db.collection('projets').insertMany([{
        id: id,
        name: name,
        description: description,
        project_chief: project_chief,
        budget: budget,
        begin_date: begin_date,
        end_date: end_date,
        finish: finish,
        intern: intern
    }])
    .then(result => res.send(result))
    .catch(error => res.send(error))
});

module.exports = router;