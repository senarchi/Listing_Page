const mongoose = require('mongoose');
let userSchema = new mongoose.Schema(
  {
    User: String,
    Name: String,
    Date: String,
    changes: String,
  },
  { collection: 'scores', timestamps: true }
);

module.exports = mongoose.model('list', userSchema);
