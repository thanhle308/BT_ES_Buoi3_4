export default class TodoService {
    constructor() {
    }

    getTodoList = () => {
        return axios({
            method: 'get',
            url: 'https://636a2049c07d8f936d93d252.mockapi.io/TODO',
        })
    }

    addTodo = (newtodo) => {
        return axios({
            method: 'post',
            url: 'https://636a2049c07d8f936d93d252.mockapi.io/TODO',
            data: newtodo
        })
    }
    deleteTodo = (id) => {
        return axios({
            method: 'delete',
            url: `https://636a2049c07d8f936d93d252.mockapi.io/TODO/${id}`
        })
    }
    updateTodo = (id,newTodo) => {
        return axios({
            method: 'put',
            url: `https://636a2049c07d8f936d93d252.mockapi.io/TODO/${id}`,
            data: newTodo
        });
    }
}