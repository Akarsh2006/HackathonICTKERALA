import React from 'react';
import TaskItem from './TaskItem'; // Or your row/card component
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function TaskTable({ tasks, onEdit, onDelete, onToggle }) {
  if (!tasks.length) {
    return (
      <Typography variant="body1" sx={{ mt: 4, color: 'gray', textAlign: 'center' }}>
        No tasks available. Please add one!
      </Typography>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </Box>
  );
}
