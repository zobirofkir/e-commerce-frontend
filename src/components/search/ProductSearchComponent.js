import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = async () => {
    if (searchTerm.length > 2) {
      try {

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/products/search/${encodeURIComponent(searchTerm)}`);
        
        navigate('/search', { state: { results: response.data.data } });
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return (
    <div className="mt-20 w-full max-w-lg mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="border rounded-lg p-3 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={handleSearchClick} 
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A8.96 8.96 0 0019 12a9 9 0 10-9 9c1.2 0 2.4-.24 3.5-.7z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductSearchComponent;
