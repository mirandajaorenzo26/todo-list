import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = () => {
    if (newItem === '') return;
    addTodo(newItem);
    setNewItem('');
  };
  return (
    <InputGroup className='mb-3'>
      <Form.Control
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Button
        variant='outline-secondary'
        id='button-add-task'
        onClick={handleSubmit}>
        Add Task
      </Button>
    </InputGroup>
  );
}
