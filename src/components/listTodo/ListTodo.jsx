import React, { useState } from 'react'
import {deleteTodo,completedTodo,updateTodo} from '../../todofeature/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const ListTodo = () => {
    const allTodos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
    console.log(allTodos)

  return (
    <div>
      {allTodos.map((todo)=>(
        <div key={todo.id} className='flex gap-[12px]'>
        
            <li className="mt-4 flex w-[600px] justify-between items-center bg-blue-300 px-4 py-2 rounded">{todo.title}</li>
            <button onClick={()=>dispatch(deleteTodo(todo.id))} className="mt-4 text-white bg-red-500 border-0 p-4 w-[126px] text-xl focus:outline-none hover:bg-red-600 rounded text-md"
           >X</button>
        </div>
      ))}
    </div>
  )
}

export default ListTodo
