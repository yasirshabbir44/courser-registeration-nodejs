var Course = require('../models/course.model.js');

exports.create = function(req, res) {
    // Create and Save a new Course
    if(!req.body.name) {
        res.status(400).send({message: "Course can not be empty"});
    }

    var course = new Course({name: req.body.name || "Untitled Course"});

console.log(req.body);
    course.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Course."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all courses from the database.
    Course.find(function(err, courses){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving courses."});
        } else {
            res.send(courses);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single course with a courseId
    console.log(req)
    Course.findById(req.params.courseId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve course with id " + req.params.courseId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a course identified by the courseId in the request
    Course.findById(req.params.courseId, function(err, course) {
        if(err) {
            res.status(500).send({message: "Could not find a course with id " + req.params.courseId});
        }

        course.title = req.body.title;
        course.content = req.body.content;

        course.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update course with id " + req.params.courseId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a course with the specified courseId in the request
    Course.remove({_id: req.params.courseId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete course with id " + req.params.id});
        } else {
            res.send({message: "Course deleted successfully!"})
        }
    });
};

