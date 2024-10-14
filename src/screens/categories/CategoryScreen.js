import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryScreen = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/categories/${id}/products`);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products.');
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  const handleShop = (product) => {
    navigate(`/products/${product.slug}`, { state: { product } });
  };

  return (
    <div className="bg-gray-100 py-8 mt-20">
      {error && <div className="text-red-500">{error}</div>}
      <h1 className="text-2xl font-semibold mb-6 text-center">Products in this category</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description.substring(0, 50) + '...'}</p>
              <div className="text-lg font-bold text-blue-gray-900 mb-4">${product.price}</div>

              <button
                className="bg-gray-900 text-white px-4 py-2 rounded hover:text-white transition"
                onClick={() => handleShop(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScreen;
