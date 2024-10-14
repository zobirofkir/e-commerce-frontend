import React from 'react';

const LoginScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username or Email</label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your username or email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-center">
            Don't have an account? 
            <a href="/register" className="text-blue-600 hover:underline"> Sign Up</a>
          </p>

          <p className="mt-4 text-sm text-center">
            Forget your password? 
            <a href="/reset" className="text-blue-600 hover:underline"> Reset</a>
          </p>

        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
