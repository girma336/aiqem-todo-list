import React, { useState } from 'react'
import { addTask } from '../../store/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../store/types';
// import { RootState } from '../../store';

const TodoCreate: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  console.log(tasks);
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask) toast.error('Please add task name');
    else if (!selectedCategory) toast.error('Please add task catagory');
    else {
        dispatch(addTask(newTask, selectedCategory));
        toast.success('Success message!');
        setNewTask('');
    }
  };

 

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
    <form onSubmit={handleAddTask} className="mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        placeholder="Enter a new task"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 mt-2"
      >
        Add Task
      </button>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
    </form>
    <div>
        <label className="mr-2">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option >Select Catagory</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
        </select>
      </div>
    </div>
  )
}

export default TodoCreate