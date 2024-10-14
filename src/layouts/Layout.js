import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from '../components/footer/FooterComponent';
import NavLinkComponent from '../components/navlink/NavLinkComponent';
import SidebareComponent from '../components/sidebare/SidebareComponent';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const closeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className='layout min-h-screen flex flex-col'>
      <NavLinkComponent />

      <div className='flex flex-1'>

        <button 
          className='text-2xl p-2 focus:outline-none fixed top-[20px] right-4 z-50'
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? closeIcon : openIcon}
        </button>

        <div 
          className={`fixed top-0 left-0 h-full text-white transition-transform duration-300 z-10 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:mt-[56px]`}
        >
          <SidebareComponent />
        </div>

        {/* Main Content */}
        <main className='flex-1 p-4 bg-gray-100'>
          <Outlet />
        </main>
      </div>
      
      <FooterComponent />
    </div>
  );
};

export default Layout;
