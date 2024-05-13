import React, { useState, useEffect } from 'react';
import FilterOption from './FilterOption';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

enum Filter {
  All,
  Completed,
  Incomplete
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  // Load todos from localStorage on initial render
  const getTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  }

  const [todos, setTodos] = useState<Todo[]>(getTodos());
  const [filter, setFilter] = useState<Filter>(Filter.All);

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (!todos.some(todo => todo.text.toLowerCase() === text.toLowerCase())) {
      const newTodo: Todo = {
        id: todos.length + 1,
        text,
        completed: false
      };
      setTodos([...todos, newTodo]);
    } else {
      alert('Todo item already present')
    }
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case Filter.Completed:
        return todo.completed;
      case Filter.Incomplete:
        return !todo.completed;
      default:
        return true;
    }
  });

  return (
    <div style={{
      margin: '20px 0 0 25px'
    }}>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <FilterOption filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
