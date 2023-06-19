var mongoose = require('mongoose');

var SessionSchema = mongoose.Schema({
     studentId:
         {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Student"
         },
         courseId:
                  {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Course"
                  },


}, {
    timestamps: true
});

module.exports = mongoose.model('Session', SessionSchema);
