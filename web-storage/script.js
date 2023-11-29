const data = localStorage.getItem('todos'); // get data from local storage

// show existing data on load
window.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('todo-list');
    const res = JSON.parse(data);
    res.map(value => {
        list.innerHTML += `<li>${value}</li>`;
    })
})

// submit button action
const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    saveTodo();
});

// save data to local storage from input
let arr = [];
const saveTodo = () => {
    if (data) {
        arr = JSON.parse(data);
    };

    const todo = document.getElementById('todo').value;
    arr.push(todo);
    localStorage.setItem('todos', JSON.stringify(arr));

    addTodo(todo);
}

// add new input data to existing list
const addTodo = (todo) => {
    const list = document.getElementById('todo-list');
    list.innerHTML += `<li>${todo}</li>`;
}