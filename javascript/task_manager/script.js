document.getElementById('addBtn').addEventListener('click', function () {
    var taskInput = document.getElementById('taskInput');
    var newTask = taskInput.value.trim();

    if (newTask !== "") {
        var li = document.createElement('li');

        var completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.addEventListener('change', function () {
            if (this.checked) {
                taskText.style.textDecoration = 'line-through';
                alert("Yay, task completed!");
            } else {
                taskText.style.textDecoration = 'none';
            }
        });

        var taskText = document.createElement('span');
        taskText.textContent = newTask;

        var deleteBtn = document.createElement('button1');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            li.remove();
            confirm("Confirm to delete task?");
        };

        li.appendChild(deleteBtn);
        li.appendChild(completeCheckbox);
        li.appendChild(taskText);

        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
        alert("Task is added");

    } else {
        alert("Please enter a task!");
    }
});