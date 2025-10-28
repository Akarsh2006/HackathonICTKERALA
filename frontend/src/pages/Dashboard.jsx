import React, { useEffect, useState } from 'react';
import { getTasks, createTask, deleteTask, updateTask } from '../api/api';
import TaskForm from '../components/TaskForm';
import TaskTable from '../components/TaskTable';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      setError('Cannot fetch tasks. Is the backend running?');
    }
  };

  useEffect(() => { loadTasks(); }, []);

  const handleSubmit = async (data) => {
    try {
      setError('');
      if (editingTask) {
        await updateTask(editingTask._id, data);
      } else {
        await createTask(data);
      }
      setEditingTask(null);
      await loadTasks();
    } catch (err) {
      setError('Failed to save task.');
    }
  };

  const handleDelete = async (id) => {
    try {
      setError('');
      await deleteTask(id);
      await loadTasks();
    } catch (err) {
      setError('Failed to delete task.');
    }
  };

  const handleToggle = async (id, currentStatus) => {
    try {
      setError('');
      const newStatus = currentStatus === 'Pending' ? 'Completed' : 'Pending';
      await updateTask(id, { status: newStatus });
      await loadTasks();
    } catch (err) {
      setError('Failed to update status.');
    }
  };

  return (
    <Box sx={{ my: 2 }}>
      {error && (
        <Alert severity="error" onClose={() => setError('')} sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <TaskForm
        onSubmit={handleSubmit}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <TaskTable
        tasks={tasks}
        onEdit={(task) => setEditingTask(task)}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </Box>
  );
}
