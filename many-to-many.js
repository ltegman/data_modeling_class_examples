const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteLinkSchema = new Schema({
  user: Schema.ObjectId,
  link: Schema.ObjectId,
  up: Boolean
});

const linkSchema = new Schema({
  url: String,
  caption: String,
  user: Schema.ObjectId
});

const userSchema = new Schema({
  name: String,
  authorization: {
    password: String,
    email: String
  }
});

const commentSchema = new Schema({
  link: Schema.ObjectId,
  content: String,
  author: Schema.ObjectId
});

const voteCommentSchema = new Scheme({
  user: Schema.ObjectId,
  comment: Schema.ObjectId,
  up: Boolean
});
