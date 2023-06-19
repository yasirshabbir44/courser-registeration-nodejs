var Student = require('../models/student.model.js');

exports.create = function(req, res) {
    // Create and Save a new Student
    if(!req.body.name) {
        res.status(400).send({message: "Student can not be empty"});
    }

console.log(req.body);
    var student = new Student({name: req.body.name || "Untitled Student", age: req.body.age});

    student.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Student."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all students from the database.
    Student.find(function(err, students){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving students."});
        } else {
            res.send(students);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single student with a noteId
    Student.findById(req.params.noteId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve student with id " + req.params.noteId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a student identified by the noteId in the request
    Student.findById(req.params.noteId, function(err, student) {
        if(err) {
            res.status(500).send({message: "Could not find a student with id " + req.params.noteId});
        }

        student.title = req.body.title;
        student.content = req.body.content;

        student.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update student with id " + req.params.noteId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a student with the specified noteId in the request
    Student.remove({_id: req.params.noteId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete student with id " + req.params.id});
        } else {
            res.send({message: "Student deleted successfully!"})
        }
    });
};

