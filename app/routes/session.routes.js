


module.exports = function(app) {

    var sessions = require('../controllers/session.controller.js');

    // Create a new Note
    app.post('/session', sessions.create);

    // Retrieve all Notes
    app.get('/session', sessions.findAll);

    // Retrieve a single Note with noteId
    app.get('/session/:sessionId', sessions.findOne);

    // Update a Note with noteId
    app.put('/sessions/:session', sessions.update);

    // Delete a Note with noteId
    app.delete('/sessions/:sessionId', sessions.delete);
}