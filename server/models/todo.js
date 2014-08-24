var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
  task: String,
  finished: Boolean
})