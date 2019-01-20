// Imports
var mongoose = require('mongoose');

// Setup schema
var salarieSchema = mongoose.Schema({
    lastname:{
        type: String,
        required:true
    },
    firstname:{
        type: String,
        required:true
    },
    birthday: Date,
    birthplace: String,
    ethnic:String,
    login:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
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