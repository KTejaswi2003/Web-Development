document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const taskCounter = document.getElementById('taskCounter');

        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                listItem.classList.add('completed');
                triggerConfetti(); // Trigger confetti when task is completed
            } else {
                listItem.classList.remove('completed');
            }
        });

        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
            updateTaskCounter();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
        updateTaskCounter();
    }
});

function updateTaskCounter() {
    const taskCounter = document.getElementById('taskCounter');
    const taskList = document.getElementById('taskList');
    taskCounter.textContent = taskList.children.length;
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}