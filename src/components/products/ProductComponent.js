import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductScreen = () => {
  const navigate = useNavigate();


  const products = [
    {
      slug: "slug product 1",
      title: 'Product 1',
      description: 'This is a short description of product This is a short description of product This is a short description of product This is a short description of product This is a short description of productThis is a short description of productThis is a short description of productThis is a short description of product 1.',
      price: '$29.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      slug: "slug product 2",
      title: 'Product 2',
      description: 'This is a short description of product This is a short description of product This is a short description of product This is a short description of product This is a short description of productThis is a short description of productThis is a short description of productThis is a short description of product 2.',
      price: '$39.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      slug: "slug product 3",
      title: 'Product 3',
      description: 'This is a short description of product This is a short description of product This is a short description of product This is a short description of product This is a short description of productThis is a short description of productThis is a short description of productThis is a short description of product 3.',
      price: '$49.99',
      image: 'https://via.placeholder.com/150',
    },
    {
      slug: "slug product 4",
      title: 'Product 4',
      description: 'This is a short description of product This is a short description of product This is a short description of product This is a short description of product This is a short description of productThis is a short description of productThis is a short description of productThis is a short description of product 4.',
      price: '$59.99',
      image: 'https://via.placeholder.com/150',
    },
  ];


  const handleBuyNow = (product) => {

    navigate(`/products/${product.slug}`, { state: { product } });
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {products.map((product) => (
          <div key={product.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description.substring(0, 50) + '...'}</p>
              <div className="text-lg font-bold text-blue-gray-900 mb-4">{product.price}</div>

              <button
                onClick={() => handleBuyNow(product)}
                className="bg-gray-900 text-white px-4 py-2 rounded hover:text-white transition"
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

export default ProductScreen;
