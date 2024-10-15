import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryListScreen = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch categories from the API
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/categories`);
      setCategories(response.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to fetch categories.');
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle navigation to product listing page
  const handleShop = (categoryId) => {
    navigate(`/categories/${categoryId}/products`); // Navigate to the product list for the category
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Categories</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>} {/* Display error if any */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <div key={category.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition ease-in-out duration-150"
                onClick={() => handleShop(category.id)} // Navigate with category ID
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryListScreen;
