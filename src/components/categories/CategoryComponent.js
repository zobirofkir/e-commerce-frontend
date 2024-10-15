import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryComponent = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const getCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/categories`);
      setCategory(response.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const openCategory = (id) => {
    navigate(`/categories/${id}`); 
  }

  return (
    <div className='bg-white text-black mt-20 hidden md:block rounded-md'>
      <div className='flex overflow-x-auto p-2'> 
        {category.map((category) => (
          <button
            key={category.id}
            className='px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white whitespace-nowrap'
            onClick={() => openCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
