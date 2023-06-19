var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({
    name: String,
    age: String,
    id: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);
