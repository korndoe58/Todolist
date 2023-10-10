'use client'
import React, { useState } from 'react';

type TodoItemProps = {
  todo: string;
  onEdit: (todo: string) => void;
  onDelete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    onEdit(editedTodo);
    setIsEditing(false);
  };

  return (
    <div >
      {isEditing ? (
        <div className='flex justify-between gap-2'>
          <input
            className='border-2 p-2 rounded-lg min-w-[200px] w-[400px]'
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button className='bg-black text-white px-6 py-2  rounded-lg w-max ' onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div className='flex gap-2 pb-2 '>
          <span className='p-4 bg-white/30 rounded-lg min-w-[200px] w-[400px] '>{todo}</span>
          <div className='flex flex-col justify-between'>
            <button className='bg-black/60 text-white px-4  rounded-lg w-max ' onClick={() => setIsEditing(true)}>Edit</button>
            <button className='bg-black/60 text-white px-4   rounded-lg w-max ' onClick={onDelete}>Delete</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
