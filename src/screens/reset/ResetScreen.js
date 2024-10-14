import axios from 'axios';
import React, { useState } from 'react';

const ResetScreen = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_APP_URL}/api/users/password/email`, data);
      if (response.status === 200) {
        console.log(response.data);
        window.location.href = '/';
      }
    } catch (err) {
      setLoading(false);

      if (err.response && err.response.status === 401) {
        setError('Sorry, we could not find a user with that email.');
      } else {
        setError('Sorry, we could not find a user with that email please try again later.');
      }
      console.error(err);
    }
  };

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
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Please Wait...' : 'Reset'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetScreen;
