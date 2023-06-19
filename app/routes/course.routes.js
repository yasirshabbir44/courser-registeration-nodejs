module.exports = function(app) {

    var courses = require('../controllers/course.controller.js');

    // Create a new Note
    app.post('/course', courses.create);

    // Retrieve all Notes
    app.get('/course', courses.findAll);

    // Retrieve a single Note with noteId
    app.get('/course/:courseId', courses.findOne);

    // Update a Note with noteId
    app.put('/courses/:course', courses.update);

    // Delete a Note with noteId
    app.delete('/courses/:courseId', courses.delete);
}