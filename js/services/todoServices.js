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
}