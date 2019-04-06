const mongoose = require('mongoose');

// Defining a schema
const commentSchema = mongoose.Schema({
    text: String,
    author: String
});
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;