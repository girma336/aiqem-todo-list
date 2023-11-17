import React, { useState } from 'react'
import TodoCreate from './todos/TodoCreate';

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className='mt-[20px] w-full'>
        <div>
          <h1 className='text-4xl leading-tight text-center text-white'>Today main focus</h1>
        </div>
        <div className='w-[80%] bg-white h-[60px] ml-auto mr-auto mt-[60px] flex justify-center items-center rounded-3xl cursor-pointer' onClick={() => {
                console.log('girma')
                setActive(true)}}>
            <p className='text-2xl leadind-tight text-[#717082]'>What is your next task</p>
        </div>
        {active && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-10 rounded-xl">
            <TodoCreate />
            <button className="absolute top-2 right-5 text-gray-500 " onClick={() => 
                setActive(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header