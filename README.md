# Task Manager Web Application

This is a simple Task Manager Web Application built using:
- **Frontend**: HTML, Tailwind CSS, JavaScript
- **Backend**: Node.js with Express
- **Storage**: Local JSON file (tasks.json)

## 🚀 Features
- ✅ Add a new task (title, due date, and status)
- ✅ View all tasks
- ✅ Mark task as completed
- ✅ Delete a task

## 🔌 Backend API Endpoints
- `POST /tasks` – Add a task
- `GET /tasks` – Retrieve all tasks
- `PUT /tasks/:id` – Update task status
- `DELETE /tasks/:id` – Delete a task

## ✅ Optional Enhancements Implemented
- Tailwind CSS for UI styling
- Input validation on task creation
- GitHub version control-ready project structure

## 🛠️ How to Run
1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app
```
2. Install dependencies:
```bash
npm install
```
3. Start the backend server:
```bash
node server.js
```
4. Open `index.html` in a browser to run the frontend.

> Note: Ensure both frontend and backend are in the same directory.
