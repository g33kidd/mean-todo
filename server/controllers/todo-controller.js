var Todo = require('../models/todo');

module.exports.create = function(req, res) {
  var todo = new Todo(req.body);
  todo.save(function(err, result) {
    res.json(result);
  });
}

module.exports.fetch = function(req, res) {
  Todo.find({}, function(err, results) {
    res.json(results);
  });
}

module.exports.find = function(req, res) {
  Todo.findOne({_id:req.params.id}, function(err, todo) {
    res.json(todo);
  });
}

module.exports.delete = function(req, res) {
  Todo.find({_id:req.params.id}).remove(function() {
    res.status(200);
    res.send("Works!");
  });
}