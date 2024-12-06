import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
export const Todoitems = ({text}) => {
  return (
    <div className='flex item-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer '>
            <img src={tick} alt=""></img>
            <p className='tex-slate-700 ml-4 text-[17px] '>{text}</p>
        </div>
        <div>
            <img className='w-3.5 cursor-pointer' src={delete_icon} alt=''  >
            </img>
        </div>
    </div>
  )
}
export default Todoitems;