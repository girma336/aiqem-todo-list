import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { FaCircle } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';


const SideBar: React.FC = () => {
  const [updown, setUpdown] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const workFilter = tasks.filter(task => task.catagory === 'work')

  const personalFilter = tasks.filter(task => task.catagory === 'personal')
  return (
    <div>
      <div className='w-[220px] ml-[10px] mt-[20px] flex justify-around items-center'>
        <div className='flex justify-start items-center ml-[-5px]'>
          <LuListTodo className='text-xl' />
          <p className='text-xl text-[#64748b] ml-[10px]'>Dashboards</p>
        </div>
        <div onClick={() => setUpdown(!updown)} className='cursor-pointer'>
          {updown ? <FaAngleDown className='text-2xl text-[#717082] ' /> : <FaAngleRight className='text-xl text-[#717082] ' />}
        </div>
      </div>
      {updown && 
        <div className='mt-5 ml-2'>
          <div
        className={`flex justify-start p-3  ml-10 mb-2  rounded-lg items-center text-[#717082] ${
          activeIndex === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/50 text-white' : ''
        }`}
        onClick={() => handleClick(0)}
      >
        <FaCircle className="ml-3 bg-red" />
        <p className="text-xl ml-[20px]">Personal{activeIndex === 0 ? <span className='ml-2 border border-white  rounded-full text-xl p-1'>{personalFilter.length}</span>: ''}</p>
      </div>
      <div
        className={`flex justify-start ml-10 p-3 mb-2 rounded-lg items-center text-[#717082] ${
          activeIndex === 1 ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/50 text-white' : ''
        }`}
        onClick={() => handleClick(1)}
      >
        <FaCircle className="ml-3 text-red-600" />
        <p className="text-xl ml-[20px]">Work{activeIndex === 1 ? <span className='ml-2 border border-white  rounded-full text-xl p-1'>{workFilter.length}</span>: ''}</p>
      </div>
      <div
        className={`flex justify-start ml-10 p-3 mb-2  rounded-lg items-center text-[#717082] ${
          activeIndex === 2 ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/50 text-white' : ''
        }`}
        onClick={() => handleClick(2)}
      >
        <FaCircle className="ml-3 bg-red" />
        <p className="text-xl ml-[20px] ">All{activeIndex === 2 ? <span className='ml-2 border border-white  rounded-full text-xl p-1'>{tasks.length}</span>: ''}</p>
      </div>
        </div>
      }
    </div>
  );
};

export default SideBar