const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');




function createTaskItem(task) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${task}</span>
        <button class="delete-btn">Delete</button>
    `;
    return taskItem;
}


// Function to add a new task
function addTask() {
    const task = taskInput.value.trim();
    if (task !== '') {
        const taskItem = createTaskItem(task);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}


// Event listener for adding a task
addTaskBtn.addEventListener('click', addTask);


// Event listener for deleting a task
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentNode.remove();
    }
});

