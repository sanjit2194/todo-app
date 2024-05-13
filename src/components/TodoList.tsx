import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div style={{ marginTop: '15px', }}>
      {todos.map(todo => (
        <p key={todo.id} style={{
          margin: ' 5px 0 0 -3px',
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
        </p>
      ))}
    </div>
  );
};

export default TodoList;
