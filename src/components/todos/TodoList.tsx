import React, { useState } from 'react'
import { deleteTask, toggleTask } from '../../store/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../store/types';
import Avatar from 'react-avatar';


const TodoList = () => {
    // const [selectedCategory, setSelectedCategory] = useState('all');
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const dispatch = useDispatch();
  
  
    const handleDeleteTask = (taskId: number) => {
      dispatch(deleteTask(taskId))
      toast.success('Success message!');
    };
  
    const handleToggleTask = (taskId: number) => {
      dispatch(toggleTask(taskId));
    };
  
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tasks.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
        <ul>
        {currentItems.map((task: any) => (
          <li
            key={task.id}
            className={`flex justify-between relative rounded-md mb-2 items-center w-[95%] md:w-[80%] h-[70px] md:h-[60px] bg-white ml-auto mr-auto ${task.completed ? 'line-through' : ''}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              className="form-checkbox ml-4 h-4 w-4 md:h-5 md:w-5 text-blue-500 rounded-full"
            />
            <span className="ml-2 text-sm text-clip w-[40%] md:w-[80%] md:text-xl text-[#717082] absolute left-[40px]">{task.name}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="ml-2 absolute right-[50px] top-6 md:top-3 md:right-[70px] bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm md:text-base px-2 py-1"
            >
              Delete
            </button>
            <div className='md:w-[50px] md:h-[50px] absolute right-1  top-5 md:top-1'>
            <Avatar name={task.catagory} size="40" round="40px" />
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
          </li>
        ))}
      </ul>
      {tasks.length > itemsPerPage && (
        <Pagination
          totalItems={tasks.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default TodoList