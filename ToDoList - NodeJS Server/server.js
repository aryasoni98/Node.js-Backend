
var express = require('express')
var app = express();
var file = require('./file.js');
var bodyParser = require('body-parser');
var port = 5000|| process.env.PORT;

var todoList = [];


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.get('/get', function(req,res) {
    file.readfile(function(data) {
        res.send(data)
    })
});

app.post('/add', function(req,res) {
    todo = JSON.stringify(req.body);
    todoList.push(todo);
    file.writefile(todoList, function(data) {
        console.log(data);
        var todo = JSON.parse( "[" + data + "]");
        var task = todo[todo.length - 1];
        res.send(task);

    });

});

app.listen(port, function(){
    console.log(`Listening on port ${port}`)
});