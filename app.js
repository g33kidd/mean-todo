var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    todoController = require('./server/controllers/todo-controller.js');

mongoose.connect('mongodb://localhost:27017/todo');

app.use(bodyParser());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.delete('/api/todo/:id', todoController.delete);
app.post('/api/todo', todoController.create);
app.get('/api/todo', todoController.fetch);
app.get('/api/todo/:id', todoController.find);

app.use('/js', express.static(__dirname + '/client/js'));
app.listen(3000, function() {
  console.log("I'm Listening on port 3000...");
});