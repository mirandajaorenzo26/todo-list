/* eslint-disable react/prop-types */
export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li>
      <label>
        <input
          type='checkbox'
          onChange={(e) => toggleTodo(id, e.target.checked)}
          checked={completed}
        />
        {title}
      </label>
      <button className='btn btn-danger' onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
