$(function(){       //this function works only atfer the page is entirely loaded

    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')

    addtodoBtn.click(function(){
        let newTodo = newTodoBox.val()  //val() returns the value of the input
        
        $.post(     //post will send a req directly to the server from the page without loading the html file. 
            '/todos',  //path where we want to send the post request
            {task: newTodo}, //this is body. the js object turns into json file which goes into the body
            function(data){     //the callback function which runs when we get a response back from the server
                todoList.empty() //clears html contents
                for(todo of data){  //this runs through the data array and takes each item and makes it available as an array
                    todoList.append("<li>" + todo.task + "</li>")
                }
            }) 
    })

})