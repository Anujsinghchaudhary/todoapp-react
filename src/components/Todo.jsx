import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import { Todoitems } from './Todoitems';
import { useRef } from 'react';
import { useState } from 'react';
export const Todo = () => {
  const [todolist ,setTodolist] = useState([]);
    const inputRef = useRef();
     const add= () =>{
        const inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }

        const newTodo={
          id: Date.now(),
          text: inputText,
          iscompleted: false,
        }
        setTodolist((prev)=>[...prev,newTodo]);
        inputRef.current.value = "";
     }
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
    {/*title*/}
    <div className='flex itmes-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt=""/>
        <h1 className='text-3xl font-semibold'>Todo List</h1>
    </div>
    {/*input*/}
    <div className='flex item-center m-7 bg-grey-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task'/>
        <button onClick={add} className='border-none rounded-full bg-blue-600 w-32 h14 text-whote text-lg font medium cursor-pointer hover:bg-red-700' >Add +</button>
    </div>
       {/*todo-list*/}
       <div>
         {todolist.map((item,index)=>(
            <Todoitems key={index} text={item.text} isCompleted={item.iscompleted}/>
         ))}
        <Todoitems text="lean coading"/>
        <Todoitems text="lean coading"/>
       </div>
    </div>
  )
}

export default Todo;