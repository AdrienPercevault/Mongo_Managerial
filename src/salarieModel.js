// Imports
var mongoose = require('mongoose');

// Setup schema
var salarieSchema = mongoose.Schema({
    name: {
        lastname:{
            type: String,
            required:true,
        },
        firstname:{
            type: String,
            required:true,
        },
    },

    birth: {
        birthday: Date,
        birthplace:{
            type:Date,
            required:true,
        },
        ethnic:String,
    },

    connection:{
        login: String,
        password: String,
        email: String,
    },

    information:{
        gender: String,
        role: String,
        manager: String,
        vacation: Number,
    },

    hire:{
        hire_date: Date,
        Salary: Number,
    },

});

// Export Project model
var Salarie = module.exports = mongoose.model('salarie', salarieSchema);
module.exports.get = function (callback, limit) {
    Salarie.find(callback).limit(limit);
}