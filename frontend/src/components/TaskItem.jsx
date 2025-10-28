import React from 'react';
import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConfirmDialog from './ConfirmDialog';

export default function TaskItem({ task, onEdit, onDelete, onToggle }) {
  return (
    <Card sx={{ mb: 1, boxShadow: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">{task.title}</Typography>
            {task.description && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {task.description}
              </Typography>
            )}
            <Box sx={{ mt: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
              <Chip
                label={task.status}
                color={task.status === 'Completed' ? 'success' : 'warning'}
                size="small"
              />
              <Typography variant="caption" color="text.secondary">
                {new Date(task.createdAt).toLocaleString()}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button
              size="small"
              variant="outlined"
              color="success"
              startIcon={<CheckCircleIcon />}
              onClick={() => onToggle(task._id, task.status)}
            >
              {task.status === 'Pending' ? 'Complete' : 'Reopen'}
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              startIcon={<EditIcon />}
              onClick={() => onEdit(task)}
            >
              Edit
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => {
                if (window.confirm('Delete this task?')) onDelete(task._id);
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
