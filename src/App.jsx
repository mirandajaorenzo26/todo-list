import { useEffect, useState } from 'react';
import NewTodoForm from './components/NewTodoForm';
import Todolist from './components/TodoList';
import Header from './components/Header';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  const [todoLeft, setTodoLeft] = useState(() => {
    let todoLeft = 0;
    todos.forEach((todo) => (!todo.completed ? todoLeft++ : todoLeft));
    return todoLeft;
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
    setTodoLeft(() => {
      let todoLeft = 0;
      todos.forEach((todo) => (!todo.completed ? todoLeft++ : todoLeft));
      return todoLeft;
    });
  }, [todos]);

  // Helper function

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

  const deleteCompleted = () => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => !todo.completed);
    });
  };
  return (
    <main className='py-20 px-5 text-xs md:text-base md:mx-10 lg:mx-[20vw] xl:mx-[30vw]'>
      <Header title={'TODO'} />
      <NewTodoForm addTodo={addTodo} />
      <Todolist
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        deleteCompleted={deleteCompleted}
        todoLeft={todoLeft}
      />
    </main>
  );
};
export default App;
