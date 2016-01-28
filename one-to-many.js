const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
});

const postSchema = new Schema({
  title: String,
  body: String,
  author: Schema.ObjectId
});

const commentSchema = new Schema({
  post: Schema.ObjectId,
  postAuthor: Schema.ObjectId,
  content: String,
  commentAuthor: Schema.ObjectId // Assumes commenters must be logged in.
});

exports.Author = mongoose.model('Author', authorSchema);
exports.Post = mongoose.model('Post', postSchema);
exports.Comment = mongoose.model('Comment', commentSchema);
