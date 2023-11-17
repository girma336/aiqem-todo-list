import React, { useState } from 'react'
import { deleteTask, toggleTask } from '../../store/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../store/types';


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
            className={`flex justify-around rounded-md mb-4 items-center w-[80%] h-[60px] bg-white ml-auto mr-auto ${task.completed ? 'line-through' : ''}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              className="form-checkbox h-5 w-5 text-blue-500 rounded-full"
            />
            <span className="ml-2 text-xl text-[#717082]">{task.name}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="ml-2 bg-red-500 hover:bg-red-600 text-white rounded-lg px-2 py-1"
            >
              Delete
            </button>
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