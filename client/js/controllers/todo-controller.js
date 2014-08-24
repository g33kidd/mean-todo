app.controller('todoController', ['$scope', '$resource', function($scope, $resource) {

  var Todo = $resource('/api/todo/:id', {id: '@id'});

  $scope.todos = [];

  Todo.query(function(results) {
    $scope.todos = results;
  });

  // Create a new task
  $scope.createTask = function() {
    var todo = new Todo();
    todo.task = $scope.todoTask;
    todo.finished = false;
    todo.$save(function(result) {
      $scope.todos.push(result);
      $scope.todoTask = "";
    });
  }

  // Delete the task
  $scope.deleteTask = function(todoItem) {
    var todo = new Todo(todoItem);
    todo.$delete({ id: todo._id }, function() {
      $scope.todos.splice($scope.todos.indexOf(todoItem), 1);
    });
  }

}])