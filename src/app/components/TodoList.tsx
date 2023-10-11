'use client'
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const completedTodos = todos.filter((todo) => todo.completed);
    localStorage.setItem('todos', JSON.stringify(completedTodos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem: Todo = {
        id: todos.length + 1,
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (id: number, updatedText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className='w-full h-max p-4 py-8 bg-white/30 flex flex-col gap-4 rounded-xl md:w-[70vw] md:max-w-[600px]'>
        <h1 className=' font-extrabold text-4xl text-center '>Todo List</h1>
        <div className='flex justify-between p-4'>
        <input
          className=' border-2 p-4 rounded-lg w-[70%]'
          placeholder='Add Todolist'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='bg-black/70 text-white px-6 py-4  rounded-lg w-max ' onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul  >
        {todos.map((todo) => (
          <li key={todo.id} className='px-4 flex gap-2 justify-between items-center'>
            <input
              className=' w-6 h-6'
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <TodoItem
              todo={todo.text}
              onEdit={(updatedTodo) => handleEditTodo(todo.id, updatedTodo)}
              onDelete={() => handleDeleteTodo(todo.id)}
            />
            
          </li>
        ))}
      </ul >
      
      
    </div>
  );
};

export default TodoList;
