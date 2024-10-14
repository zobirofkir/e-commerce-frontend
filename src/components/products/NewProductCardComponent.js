import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewProductCardComponent = ({ product }) => {
  const navigate = useNavigate();

  const handleButNowClick = () => {
    navigate(`/products/${product.slug}`, { state: { product } });
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description.substring(0, 50) + '...'}</p>
        <div className="text-lg font-bold text-blue-gray-900 mb-4">{product.price}</div>
        <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition" onClick={handleButNowClick}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default NewProductCardComponent;
