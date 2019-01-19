// Imports
var mongoose = require('mongoose');

// Setup schema
var salarieSchema = mongoose.Schema({
    name: {
        lastname:{
            type: String,
            required:true
        },
        firstname:{
            type: String,
            required:true
        },
    },

    birth: {
        birthday: Date,
        birthplace: String,
        ethnic:String,
    },

    connection:{
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
    },

    information:{
        gender: String,
        role: String,
        manager: String,
        vacation: Number,
    },

    hire:{
        hire_date: Date,
        fire_date: Date,
        Salary: Number,
    },



});

// Export Project model
var Salarie = module.exports = mongoose.model('salarie', salarieSchema);
module.exports.get = function (callback, limit) {
    Salarie.find(callback).limit(limit);
}