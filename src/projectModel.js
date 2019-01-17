// Imports
var mongoose = require('mongoose');

// Setup schema
var projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    project_chief: String,
    budget: String,
    begin_date: {
        type: Date,
        default: Date.now
    },
    end_date: Date,
    finish: Boolean,
    intern: Boolean
});

// Export Project model
var Project = module.exports = mongoose.model('project', projectSchema);
module.exports.get = function (callback, limit) {
    Project.find(callback).limit(limit);
}
