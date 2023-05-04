import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === '') return;
    addTodo(newItem);
    setNewItem('');
  };
  return (
    <form className='flex w-full gap-1 '>
      <input
        className='flex-auto focus:outline-double focus:outline-offset-2 text-lg rounded-lg'
        type='text'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className='add-task-btn' onClick={handleSubmit}>
        <AiOutlinePlus />
      </button>
    </form>
  );
}
