import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CategoryComponent = () => {
  const [category, setCategory] = useState([]);

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

  return (
    <div className='bg-white text-black mt-20 hidden md:block rounded-md'>
      <div className='flex overflow-x-auto p-2'> 
        {category.map(category => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className='px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white whitespace-nowrap'
            aria-label={category.name}
          >
            <span>{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
