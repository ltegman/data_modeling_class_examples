const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  authentication: {
    email: String,
    password: String
  },
  username: String
});

const profileSchema = new Schema({
  pictureUrl: String,
  age: Number,
  name: String,
  user: Schema.ObjectId
});

exports.User = mongoose.model('User', userSchema);
exports.Profile = mongoose.model('Profile', profileSchema);
