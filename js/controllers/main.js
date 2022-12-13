import TodoService from "../services/todoServices.js";
import Todo from "../models/Todo.js";

const todoSer = new TodoService();


const getTodoListMain = () => {
    todoSer.getTodoList()
        .then((result) => {
            // console.log(result.data);
            showTodoList(result.data);
        })
        .catch((error) => {
            console.log("that bai");
        })
}
getTodoListMain();

const showTodoList = (todoArr) => {
    let todo_content = todoArr.map((todo,index) => {
        let {name,status} = todo;
        return `
            <li>${name}</li>
        `;
    });

    document.getElementById("todo").innerHTML = todo_content.join("");
}

const addTodoMain = () => {
    let newtodo = document.getElementById("newTask").value;
    let status_newtodo = "false";
    let newTodo = new Todo(newtodo,status_newtodo);
    
    todoSer.addTodo(newTodo)
    .then((result) => {
        document.getElementById("newTask").value = "";
        getTodoListMain();
    })
    .catch((error) => { 
        console.log(error);
     })

}
window.addTodoMain = addTodoMain;