import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { FaCircle } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';


const ButtomNav: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const workFilter = tasks.filter(task => task.catagory === 'work')

  const personalFilter = tasks.filter(task => task.catagory === 'personal')
  return (
    <div className='fixed top-0 left-0 right-0 h-[40px] bg-white'>
        <div className='lg:mt-5 ml-2 flex justify-between  items-center'>
          <div
        className={`flex justify-start p-0 lg:p-3  lg:m-0 lg:mb-2  rounded-lg items-center text-[#717082] ${
          activeIndex === 0 ? 'bg-gradient-to-r h-[30px] mt-1 from-indigo-500 to-purple-500 shadow-xl shadow-indigo-500/50 text-white pr-3' : ''
        }`}
        onClick={() => handleClick(0)}
      >
        {/* <FaCircle className="ml-3 bg-red" /> */}
        <p className="text-sm ml-[20px]">Personal{activeIndex === 0 ? <span className='ml-2 border border-white  rounded-full text-sm p-0'>{personalFilter.length}</span>: ''}</p>
      </div>
      <div
        className={`flex justify-start p-0 lg:p-3  lg:m-0 lg:mb-2  rounded-lg items-center text-[#717082] ${
          activeIndex === 1 ? 'bg-gradient-to-r h-[30px] mt-1 from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/50 text-white pr-3' : ''
        }`}
        onClick={() => handleClick(1)}
      >
        {/* <FaCircle className="ml-3 text-red-600" /> */}
        <p className="text-sm ml-[20px]">Work{activeIndex === 1 ? <span className='ml-2 border border-white  rounded-full text-sm p-0'>{workFilter.length}</span>: ''}</p>
      </div>
      <div
        className={`flex justify-start ml-3 lg:p-3 lg:mb-2  rounded-lg items-center text-[#717082] mr-3 ${
          activeIndex === 2 ? 'bg-gradient-to-r h-[30px] mt-1 mr-3 from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/50 text-white pr-2' : ''
        }`}
        onClick={() => handleClick(2)}
      >
        {/* <FaCircle className="ml-3 bg-red" /> */}
        <p className="text-sm ml-[20px] ">All{activeIndex === 2 ? <span className='ml-2 border border-white  rounded-full text-sm p-0 mr-1'>{tasks.length}</span>: ''}</p>
      </div>
        </div>
    </div>
  );
};


export default ButtomNav