import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get category ID from URL
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // Fetch products based on category ID
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/categories/${id}/products`);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products.');
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchProducts();
  }, [id]);

  // Navigate to product detail screen
  const handleBuyNow = (product) => {
    navigate(`/products/${product.slug}`, { state: { product } });
  };

  return (
    <div className="bg-gray-100 py-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Products in Category</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>} {/* Display error if any */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={product.image || 'https://via.placeholder.com/150'} 
                alt={product.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description.substring(0, 50) + '...'}</p>
                <div className="text-lg font-bold text-blue-gray-900 mb-4">{product.price} MAD</div>

                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition ease-in-out duration-150"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListScreen;
