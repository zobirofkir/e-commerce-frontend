import React from 'react';
import {  useLocation } from 'react-router-dom';

const ProductInfoScreen = () => {
  const location = useLocation();
  

  const { product } = location.state || {};


  if (!product) {
    return <div className="text-center mt-20 text-red-600">Product not found or no data passed.</div>;
  }

  return (
    <div className=' flex items-center h-screen'>
        <div className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                <div className="flex justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-md object-cover rounded-lg shadow-lg"
                />
                </div>


                <div>
                <h1 className="text-5xl font-bold mb-4">{product.title}</h1>
                <p className="text-gray-700 text-lg mb-6">
                    {product.description}
                </p>

                <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-gray-900">
                    {product.price} MAD
                    </span>
                </div>

                <button className="bg-gray-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
                    Add to Cart
                </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductInfoScreen;
