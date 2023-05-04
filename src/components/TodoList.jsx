/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

export default function Todolist({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.length === 0 && 'No tasks available'}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
