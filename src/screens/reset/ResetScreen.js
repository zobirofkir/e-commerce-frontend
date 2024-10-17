import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ResetAction } from '../../redux/actions/ResetAction';

const ResetScreen = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const {loading, error} = useSelector((state) => state.reset);

  const handleReset = (e) => {
    e.preventDefault();

    dispatch(ResetAction(email));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleReset}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-500 transition duration-200"
            disabled={loading}
          >
            {loading ? "Please Wait..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetScreen;
