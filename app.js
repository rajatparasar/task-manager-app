const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

function loadTasks() {
  fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasks => {
      taskList.innerHTML = '';
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-white p-2 rounded shadow';
        li.innerHTML = `
          <div>
            <p class="${task.status === 'completed' ? 'line-through text-gray-400' : ''}">${task.title} - ${task.dueDate}</p>
          </div>
          <div class="space-x-2">
            <button onclick="updateTask(${task.id})" class="bg-green-500 text-white px-2 rounded">✓</button>
            <button onclick="deleteTask(${task.id})" class="bg-red-500 text-white px-2 rounded">🗑️</button>
          </div>
        `;
        taskList.appendChild(li);
      });
    });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const dueDate = document.getElementById('dueDate').value;
  if (!title || !dueDate) return alert('Please fill out all fields.');

  fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, dueDate, status: 'pending' })
  })
  .then(() => {
    form.reset();
    loadTasks();
  });
});

function updateTask(id) {
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'completed' })
  }).then(() => loadTasks());
}

function deleteTask(id) {
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE'
  }).then(() => loadTasks());
}

loadTasks();
