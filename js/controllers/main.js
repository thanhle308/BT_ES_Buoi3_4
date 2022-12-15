import TodoService from "../services/todoServices.js";
import Todo from "../models/Todo.js";

const todoSer = new TodoService();
let todoArrList = []; 


const getTodoListMain = () => {
    todoSer.getTodoList()
        .then((result) => {
            todoArrList = result.data;
            showTodoList(result.data);
        })
        .catch((error) => {
            console.log("that bai");
        })
}
getTodoListMain();

const showTodoList = (todoArr) => {
    let doneTodo = "";
    let todo_content = todoArr.map((todo, index) => {
        let { name, status, id } = todo;
        if (status == "false") {
            return `
            <li><p>${name}</p> <span><i class="fa-solid fa-trash-can " onclick="deleteTodoMain('${id}')"></i><i class="fa-regular fa-circle-check" onclick="updateTodoMain(${id + "," + status + ",'" + name + "'"})"></i></span></li>
        `;
        } else {
            doneTodo += `
            <li><p>${name}</p> <span><i class="fa-solid fa-trash-can " onclick="deleteTodoMain('${id}')"></i><i class="fa-regular fa-circle-check" onclick="updateTodoMain(${id + "," + status + ",'" + name + "'"})"></i></span></li>
            `
        }

    });
    document.getElementById("todo").innerHTML = todo_content.join("");
    document.getElementById("completed").innerHTML = doneTodo;
}

const addTodoMain = () => {
    let name = document.getElementById("newTask").value;
    let status = "false";
    let newTodo = new Todo(name, status);

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

const deleteTodoMain = (id) => {
    todoSer.deleteTodo(id)
        .then((id) => {
            getTodoListMain();
        })
        .catch((error) => {
            console.log(error);
        })
}
window.deleteTodoMain = deleteTodoMain;

const updateTodoMain = (id, status, name) => {
    if (status) {
        status = "false";
    } else {
        status = "true";
    }
    let newTodo = new Todo(name, status);
    todoSer.updateTodo(id, newTodo)
        .then((result) => {
            getTodoListMain();
        })
        .catch((error) => {
            console.log(error);
        })
}
window.updateTodoMain = updateTodoMain;

const sortTodo = (type) => {
    if (type == "down") {
        // Hàm sắp xếp sort a-z
        todoArrList.sort((todo1,todo2)=>{
            let a= todo1.name.toLowerCase();
            let b= todo2.name.toLowerCase();
            return a===b ? 0 : a>b ? 1 : -1;
        });
        console.log("done",todoArrList);
    showTodoList(todoArrList);
    } else if (type = "up") {
        // Sort ngược lại  z-a thì đổi a>b thành a<b
        todoArrList.sort((todo1,todo2)=>{
            let a= todo1.name.toLowerCase();
            let b= todo2.name.toLowerCase();
            return a===b ? 0 : a<b ? 1 : -1;
        });
    showTodoList(todoArrList);
    }
}
window.sortTodo = sortTodo;