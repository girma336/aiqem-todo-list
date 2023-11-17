import React from 'react'
import SideBar from './SideBar'
import Todo from './todos/Todo'

const Dashboard = () => {
  return (
    <div className='w-[85%] bg-white h-[85%] rounded-3xl flex'>
        <SideBar />
        <Todo />
    </div>
  )
}

export default Dashboard