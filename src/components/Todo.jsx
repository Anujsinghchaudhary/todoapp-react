import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import { Todoitems } from './Todoitems';

export const Todo = () => {
  const [todolist, setTodolist] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []); 
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null; 
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };

    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodolist((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodolist((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist)); 
  }, [todolist]);

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/* title */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt="Todo Icon" />
        <h1 className='text-3xl font-semibold'>Todo List</h1>
      </div>
      {/* input */}
      <div className='flex items-center m-7 bg-gray-200 rounded-full'>
        <input
          ref={inputRef}
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          type="text"
          placeholder='Add your task'
        />
        <button
          aria-label="Add task" 
          onClick={add}
          className='border-none rounded-full bg-blue-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-blue-700'
        >
          Add +
        </button>
      </div>
      {/* todo-list */}
      <div>
        {todolist.map((item) => (
          <Todoitems key={item.id} text={item.text} id={item.id} isCompleted={item.isCompleted} deleteTodo={deleteTodo}
            toggle={toggle} />
        ))}
      </div>
    </div>
  );
};

export default Todo;