import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import Todo from './todos/Todo';
import { FaBars } from "react-icons/fa";
import ButtomNav from './ButtomNav';

const Dashboard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldShowSidebar = windowWidth >= 1024;

  return (
    <div className='w-[95%] h-[90%] md:w-[85%] bg-white md:h-[85%] md:rounded-3xl flex'>
      {shouldShowSidebar ? <SideBar />: <ButtomNav />}
      <Todo />
    </div>
  );
};

export default Dashboard;