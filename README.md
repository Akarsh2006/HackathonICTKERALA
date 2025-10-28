# MERN Task Manager

A simple Task Manager built with the MERN stack. Users can create, list, update, and delete tasks with a clean, responsive UI.

## Tech Stack
- Frontend: React (Vite), Axios, Material UI
- Backend: Node.js, Express.js, Mongoose
- Database: MongoDB (Local or Atlas)

## Features
- Create task (title required, description optional)
- List tasks sorted by newest first
- Update title, description, and status (Pending/Completed)
- Delete task (window.confirm)
- Responsive, minimal UI with MUI

App: http://localhost:5173

## API Endpoints
Base: `/api`
- POST `/tasks` → Create task
- GET `/tasks` → Get all tasks (newest first)
- PUT `/tasks/:id` → Update task (title/description/status)
- DELETE `/tasks/:id` → Delete task

## License
For educational purposes.
