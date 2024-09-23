function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const newTask = document.createElement('li');
  
  const taskText = document.createElement('span');
  taskText.innerText = taskInput.value;
  newTask.appendChild(taskText);

  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.classList.add('edit');
  editBtn.onclick = function() {
    const newTaskValue = prompt('Edit your task:', taskText.innerText);
    if (newTaskValue !== null) {
      taskText.innerText = newTaskValue;
    }
  };
  newTask.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('delete');
  deleteBtn.onclick = function() {
    taskList.removeChild(newTask);
  };
  newTask.appendChild(deleteBtn);

  newTask.onclick = function() {
    newTask.classList.toggle('complete');
  };

  taskList.appendChild(newTask);

  taskInput.value = '';

  newTask.style.opacity = 0;
  setTimeout(() => {
    newTask.style.opacity = 1;
  }, 100);
}
