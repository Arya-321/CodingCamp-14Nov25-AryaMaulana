let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");



    if (todoInput.value === ''|| todoDate.value === '') {
        alert("Please Fill In Both Fields.");
    } 
    else {
        todos.push({ text: todoInput.value, date: todoDate.value });
        todoInput.value = '';
        todoDate.value = '';

          renderTodos();
    }
}
function renderTodos() {
    
    const todoList = document.getElementById('todo-list');

  
    todoList.innerHTML = '';

  
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} <span class="text-sm text-white-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}
function clearTodos() {
    todos = [];
    renderTodos();
}
function filterTodos() {
    const filterDate = document.getElementById("filter-date").value;

    if (filterDate === '') {
        alert("Please select a date to filter.");
        return;
    }

    
    const filteredTodos = todos.filter(todo => todo.date === filterDate);

    
    renderTodos(filteredTodos);
} 