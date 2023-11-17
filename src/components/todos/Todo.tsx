import React from 'react'
import Header from '../Header'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <div className='w-[100%] bg-[#a18aff] flex justify-center m-2 rounded-tr-2xl rounded-br-2xl flex-col'>
      <Header />
      <div className='h-[80%] mt-[60px]'>
      <TodoList />
      </div>
    </div>
  )
}

export default Todo