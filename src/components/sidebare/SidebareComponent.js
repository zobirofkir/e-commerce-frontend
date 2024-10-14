import React from 'react';

const SidebareComponent = () => {
  return (
    <div className="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="flex justify-center mt-10">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          CSW SHOP
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        {/* Main Content */}
      </nav>

      {/* Login and Register Buttons Section */}
      <div className="mt-auto mb-5 md:mb-20">
        <div className="relative block w-full">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              {/* Login Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m9 9L3 12l9-9" />
              </svg>
            </div>
            <a href='/login'>
              Login
            </a>
          </div>
        </div>
        <div className="relative block w-full mt-2">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              {/* Register Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
              </svg>
            </div>
            <a href='/registerRegister'>
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebareComponent;
