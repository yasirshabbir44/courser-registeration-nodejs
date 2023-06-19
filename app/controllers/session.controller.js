var Session = require('../models/session.model.js');


exports.create = function(req, res) {
    // Create and Save a new Session
    if(!req.body.studentId && !req.body.courseId) {
        res.status(400).send({message: "Session can not be empty"});
    }

console.log(req.body);
    var session = new Session({studentId: req.body.studentId, courseId: req.body.courseId});

    session.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Session."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all sessions from the database.
    Session.find(function(err, sessions){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving sessions."});
        } else {
            res.send(sessions);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single session with a noteId
    Session.findById(req.params.noteId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve session with id " + req.params.noteId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a session identified by the noteId in the request
    Session.findById(req.params.noteId, function(err, session) {
        if(err) {
            res.status(500).send({message: "Could not find a session with id " + req.params.noteId});
        }

        session.title = req.body.title;
        session.content = req.body.content;

        session.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update session with id " + req.params.noteId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a session with the specified noteId in the request
    Session.remove({_id: req.params.noteId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete session with id " + req.params.id});
        } else {
            res.send({message: "Session deleted successfully!"})
        }
    });
};

