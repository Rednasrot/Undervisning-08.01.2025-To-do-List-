document.getElementById('add').addEventListener('click', function() {
  let inputValue = document.getElementById('to-do').value;
  if (inputValue) {
    addTodo(inputValue);
    saveTodoToLocalStorage(inputValue, false);
    document.getElementById('to-do').value = "";
  }
});


function addTodo(item, isCompleted = false) {
  let todoList = document.getElementById('list');
  let li = document.createElement('li');
  // li.innerHTML = `<span>${todoList.text}</span>
  // <button data-id="${todo.id}">Remove</button>`;
  li.textContent = item;

  if (isCompleted) {
    li.classList.add("Completed")


  };

  let removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = function() {
    todoList.removeChild(li);
  };

  li.appendChild(removeButton);
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  todoList.appendChild(li);
};


//local storage:


document.addEventListener("DOMContentLoaded", function() {
 let savedItems = JSON.parse(localStorage.getItem("items")) || [];
 savedItems.array.forEach(item => addItem (item.text, item.completed));
});

function saveTodoToLocalStorage(item, isCompleted) {
 const todos = JSON.parse(localStorage.getItem('todos')) || [];
 todos.push({ text: item, completed: isCompleted})
 localStorage.setItem('todos', JSON.stringify(todos));
};