// Imports
var mongoose = require('mongoose');

// Setup schema
var salarieSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    birthday: Date,
    birthplace: String,
    ethnic:String,
    login: String,
    password: String,
    email: String,
    gender: String,
    role: String,
    manager: String,
    vacation: Number,
    hire_date: Date,
    fire_date: Date,
    Salary: Number
});

// Export Project model
var Salarie = module.exports = mongoose.model('salarie', salarieSchema);
module.exports.get = function (callback, limit) {
    Salarie.find(callback).limit(limit);
}