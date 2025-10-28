import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, FormControl } from '@mui/material';

export default function TaskForm({ onSubmit, editingTask, setEditingTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Task title is required!');
      return;
    }
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
    setEditingTask(null);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setEditingTask(null);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mb: 3, p: 2, border: '1px solid #ddd', borderRadius: 2 }}
    >
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="Task Title*"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="Description (optional)"
          value={description}
          onChange={e => setDescription(e.target.value)}
          multiline
          rows={2}
        />
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        {editingTask ? "Update Task" : "Add Task"}
      </Button>
      {editingTask && (
        <Button onClick={handleCancel} variant="outlined" sx={{ ml: 1 }}>
          Cancel
        </Button>
      )}
    </Box>
  );
}
