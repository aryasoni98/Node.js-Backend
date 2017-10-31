$(document).ready(function() {
    var btn = $('#btn');
    var input = $('#todo');
    var output = $('#output');
    var todoList = [];


    $.ajax({url: '/get' , success:function(data) {
        data = JSON.parse("[" + data + "]");
        todoList = data;
        display(todoList)
    }});

    var display = function(todoList) {
        for (todo in todoList) {
            output.append('<li>'+ todoList[todo].task + '</li>')

        }
    };

    console.log()
    display();
    btn.click(function() {
        $.post('/add', {"task": input.val()},function(data){
            console.log(data);
            output.append('<li>' + data.task + '</li>');
            todoList.push(data);
            //display(todoList);
        })
    })




});