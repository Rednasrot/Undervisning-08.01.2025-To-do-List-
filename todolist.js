document.getElementById('add').addEventListener('click', function() {
  let inputValue = document.getElementById('to-do').value;
  if (inputValue) {
    addTodo(inputvalue);
    document.getElementById('to-do').value = "";
  }
}
);

function addTodo(task) {
 let todoList = document.getElementById ('list')
 let li = document.createElement('li');
 li.textContent = task;
 
 let removeButton = document.createElemement ('button')
 removeButton.textcontent = 'Remove';
 removeButton.onClick = function() {
  todoList.removeChild(li);
 };


 li.appendChild(removeButton);
 li.addEventListener('click', function() {
  li.classlist.toggle('completed');
  });

  todolist.appendchild(li);

 }
}


