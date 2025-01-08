document.getElementById('add').addEventListener('click', function() {
  let inputValue = document.getElementById('to-do').value;
  if (inputValue) {
    addTodo(inputValue);
    document.getElementById('to-do').value = " ";
  }
});

function addTodo(task) {
 let todoList = document.getElementById ('list')
 let li = document.createElement('li');
//  li.innerHTML = `<span>${todoList.text}</span>
//  <button data-id"${todo.id}> Remove </button>`
 li.textContent = task;
 
 let removeButton = document.createElemement ('button')
 removeButton.textcontent = 'Remove';
 removeButton.onclick = function() {
  todoList.removeChild(li);
 };


 li.appendChild(removeButton);
 li.addEventListener('click', function() {
  li.classlist.toggle('completed');
  });

  todoList.appendchild(li);

 };


