const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: {
    String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = model('Dev', DevSchema);
