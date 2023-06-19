var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
    name: String,
    id: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', CourseSchema);
