import { TiDelete } from 'react-icons/ti';
/* eslint-disable react/prop-types */
export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li className='px-1 py-2 flex justify-between text-xl max-w-screen items-center'>
      <label className='w-full text-left'>
        <input
          className='form-checkbox checked:bg-navy-blue h-6 w-6 rounded-full'
          type='checkbox'
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
          checked={completed}
        />
        {completed ? (
          <span className='ml-5 w-[100%] line-through text-gray-400'>
            {title}
          </span>
        ) : (
          <span className='ml-5 w-[100%]'>{title}</span>
        )}
      </label>
      <button className='' onClick={() => deleteTodo(id)}>
        <TiDelete size={32} color='' />
      </button>
    </li>
  );
}
