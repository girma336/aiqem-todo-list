import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { FaCircle } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";

const SideBar: React.FC = () => {
  const [updown, setUpdown] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

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
        className={`flex justify-start p-3 mb-2  rounded-lg items-center ${
          activeIndex === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/50 text-white' : ''
        }`}
        onClick={() => handleClick(0)}
      >
        <FaCircle className="ml-3 bg-red" />
        <p className="text-xl ml-[50px]">Sector</p>
      </div>
      <div
        className={`flex justify-start p-3 mb-2 rounded-lg items-center ${
          activeIndex === 1 ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/50 text-white' : ''
        }`}
        onClick={() => handleClick(1)}
      >
        <FaCircle className="ml-3 text-red-600" />
        <p className="text-xl ml-[50px]">Sector</p>
      </div>
      <div
        className={`flex justify-start p-3 mb-2  rounded-lg items-center ${
          activeIndex === 2 ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/50 text-white' : ''
        }`}
        onClick={() => handleClick(2)}
      >
        <FaCircle className="ml-3 bg-red" />
        <p className="text-xl ml-[50px]">Sector</p>
      </div>
      <div
        className={`flex justify-start p-3  rounded-lg items-center ${
          activeIndex === 3 ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/50 text-white' : ''
        }`}
        onClick={() => handleClick(3)}
      >
        <FaCircle className="ml-3 bg-red" />
        <p className="text-xl ml-[50px]">Sector</p>
      </div>
        </div>
      }
    </div>
  );
};

export default SideBar