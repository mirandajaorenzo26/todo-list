import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NewTodoForm from './components/NewTodoForm';
import Todolist from './components/Todolist';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <main>
      <h1>Todo List by JRM</h1>
      <NewTodoForm addTodo={addTodo} />
      <Todolist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </main>
  );
};
export default App;
