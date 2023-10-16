document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTask');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(taskItem);
            taskInput.value = '';

            const deleteButton = taskItem.querySelector('.delete');
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(taskItem);
            });
        }
    });
});
