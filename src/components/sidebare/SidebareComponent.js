import React from 'react';

const SidebareComponent = () => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('name');
    window.location.href = '/login';
  };

  const token = localStorage.getItem('accessToken');

  return (
    <div className="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="flex justify-center mt-10">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          CSW SHOP
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            {/* Product Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
              <polygon points="22 7 12 2 2 7 2 17 12 22 22 17" stroke="currentColor" strokeLinejoin="round" />
              <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="2" x2="12" y1="7" y2="12" />
              <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="12" x2="12" y1="22" y2="12" />
              <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="22" x2="12" y1="7" y2="12" />
              <line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" x1="17" x2="7" y1="4.5" y2="9.5" />
            </svg>
          </div>
          <a href='/products'>Products</a>
        </div>

        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            {/* Categories Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" className="w-5 h-5">
              <rect x="2" y="2" width="8.56" height="8.56" stroke="currentColor" strokeLinejoin="round"></rect>
              <rect x="13.44" y="2" width="8.56" height="8.56" stroke="currentColor" strokeLinejoin="round"></rect>
              <rect x="2" y="13.44" width="8.56" height="8.56" stroke="currentColor" strokeLinejoin="round"></rect>
              <rect x="13.44" y="13.44" width="8.56" height="8.56" stroke="currentColor" strokeLinejoin="round"></rect>
            </svg>
          </div>
          <a href='/categories'>Categories</a>
        </div>

        <div
          role="button"
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div className="grid mr-4 place-items-center">
            {/* Offer Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 209.281 209.281" stroke-width="1.5" stroke="black" aria-hidden="true" class="w-5 h-5">
                <g>
                  <path d="M207.17,99.424l-20.683-21.377l4.168-29.455c0.567-4.006-2.145-7.739-6.131-8.438l-29.298-5.137L141.285,8.739 
                    c-1.896-3.575-6.287-4.998-9.919-3.223L104.64,18.582L77.916,5.517c-3.636-1.777-8.023-0.351-9.92,3.223L54.055,35.018 
                    l-29.298,5.137c-3.985,0.698-6.698,4.432-6.131,8.438l4.167,29.455L2.11,99.424c-2.813,2.907-2.813,7.522,0,10.43l20.682,21.378 
                    l-4.167,29.456c-0.566,4.005,2.146,7.738,6.13,8.438l29.299,5.14l13.942,26.275c1.896,3.574,6.284,5,9.919,3.223l26.724-13.062 
                    l26.727,13.062c1.059,0.518,2.181,0.763,3.288,0.763c2.691,0,5.286-1.454,6.63-3.986l13.942-26.275l29.299-5.14 
                    c3.984-0.699,6.697-4.433,6.13-8.438l-4.168-29.456l20.684-21.378C209.984,106.946,209.984,102.332,207.17,99.424z"
                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    
                  <path d="M80.819,98.979c10.014,0,18.16-8.146,18.16-18.158c0-10.016-8.146-18.164-18.16-18.164 
                    c-10.015,0-18.162,8.148-18.162,18.164C62.657,90.834,70.805,98.979,80.819,98.979z M80.819,74.657c3.397,0,6.16,2.765,6.16,6.164 
                    c0,3.396-2.764,6.158-6.16,6.158c-3.398,0-6.162-2.763-6.162-6.158C74.657,77.422,77.421,74.657,80.819,74.657z"
                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>

                  <path d="M140.867,68.414c-2.342-2.343-6.143-2.344-8.484,0l-63.968,63.967c-2.343,2.343-2.343,6.142,0,8.485 
                    c1.172,1.172,2.707,1.757,4.243,1.757c1.535,0,3.071-0.586,4.243-1.757l63.967-63.967C143.21,74.556,143.21,70.757,140.867,68.414z"
                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>

                  <path d="M128.46,110.301c-10.013,0-18.158,8.146-18.158,18.158c0,10.016,8.146,18.164,18.158,18.164 
                    c10.016,0,18.164-8.148,18.164-18.164C146.624,118.447,138.476,110.301,128.46,110.301z M128.46,134.624 
                    c-3.395,0-6.158-2.765-6.158-6.164c0-3.395,2.763-6.158,6.158-6.158c3.398,0,6.164,2.763,6.164,6.158 
                    C134.624,131.858,131.859,134.624,128.46,134.624z"
                    stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>

          </div>
          <a href='/offers'>Offers</a>
        </div>

      </nav>

      {/* Conditional Rendering for Login/Register or Logout */}
      <div className="mt-auto mb-5 md:mb-20">
        {token ? (
          <div className="relative block w-full">
            <div
              role="button"
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              onClick={handleLogout}
            >
              <div className="grid mr-4 place-items-center">
                {/* Logout Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m9 9L3 12l9-9" />
                </svg>
              </div>
              <span>Logout</span>
            </div>
          </div>
        ) : (
          <>
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
                <a href='/login'>Login</a>
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
                <a href='/register'>Register</a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SidebareComponent;
