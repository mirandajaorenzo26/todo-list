/* eslint-disable react/prop-types */
import { useState } from 'react';

import TodoItem from './TodoItem';
import TodoItemCounter from './TodoItemCounter';

export default function Todolist({
  todos,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  todoLeft,
}) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className='py-5'>
        <h2>Tasks</h2>
        <div className='flex gap-2'>
          <div
            className={activeTab === 1 ? 'tab active flex-1' : 'tab flex-1'}
            onClick={() => handleTabClick(1)}>
            All
          </div>
          <div
            className={activeTab === 2 ? 'tab active flex-1' : 'tab flex-1'}
            onClick={() => handleTabClick(2)}>
            Active
          </div>
          <div
            className={activeTab === 3 ? 'tab active flex-1' : 'tab flex-1'}
            onClick={() => handleTabClick(3)}>
            Completed
          </div>
        </div>

        <div className='tab-content'>
          {activeTab === 1 && (
            <div>
              <ul className='flex flex-col py-5'>
                {todos.length === 0 && (
                  <b className='py-2'>No tasks available</b>
                )}
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
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <ul className='flex flex-col py-5'>
                {todos.length === 0 && (
                  <b className='py-2'>No tasks available</b>
                )}
                {todos.map((todo) => {
                  if (!todo.completed) {
                    return (
                      <TodoItem
                        key={todo.id}
                        {...todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                      />
                    );
                  }
                })}
              </ul>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <ul className='flex flex-col py-5'>
                {todos.length === 0 && (
                  <b className='py-2'>No tasks available</b>
                )}
                {todos.map((todo) => {
                  if (todo.completed) {
                    return (
                      <TodoItem
                        key={todo.id}
                        {...todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                      />
                    );
                  }
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className='flex justify-between py-5 px-3 border-t-2'>
        <TodoItemCounter todoLeft={todoLeft} />
        <button
          className='cursor-pointer underline-offset-2 underline'
          onClick={() => deleteCompleted()}>
          Clear Completed
        </button>
      </div>
    </>
  );
}
