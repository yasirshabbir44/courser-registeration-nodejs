


module.exports = function(app) {

    var students = require('../controllers/student.controller.js');

    // Create a new Note
    app.post('/student', students.create);

    // Retrieve all Notes
    app.get('/student', students.findAll);

    // Retrieve a single Note with noteId
    app.get('/student/:studentId', students.findOne);

    // Update a Note with noteId
    app.put('/students/:student', students.update);

    // Delete a Note with noteId
    app.delete('/students/:studentId', students.delete);
}