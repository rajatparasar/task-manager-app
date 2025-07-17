const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const DATA_FILE = './tasks.json';

app.use(cors());
app.use(bodyParser.json());

function readTasks() {
    const data = fs.existsSync(DATA_FILE) ? fs.readFileSync(DATA_FILE) : '[]';
    return JSON.parse(data);
}

function writeTasks(tasks) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

app.get('/tasks', (req, res) => {
    res.json(readTasks());
});

app.post('/tasks', (req, res) => {
    const tasks = readTasks();
    const newTask = { id: Date.now(), ...req.body };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const updatedTasks = tasks.map(task =>
        task.id == req.params.id ? { ...task, ...req.body } : task
    );
    writeTasks(updatedTasks);
    res.json({ message: 'Task updated' });
});

app.delete('/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const filtered = tasks.filter(task => task.id != req.params.id);
    writeTasks(filtered);
    res.json({ message: 'Task deleted' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
