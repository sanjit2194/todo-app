import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [input, setInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      addTodo(input.trim());
      setInput('');
    } else {
      alert('Enter todo item to add to the list')
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder='Enter Todo item'
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === 'enter') {
            handleAddTodo()
          }
        }}
      />
      <button style={{ marginLeft: '15px' }} onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
