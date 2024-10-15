import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResultsScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || []; 

  const handleProductClick = (product) => {
    navigate(`/products/${product.slug}`, { state: { product } });
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <h2 className="text-xl font-bold mb-4 col-span-full">Search Results</h2>
        {results.length === 0 ? (
          <p className="col-span-full text-center">No products found.</p>
        ) : (
          results.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description.substring(0, 50) + '...'}</p>
                <p className="text-lg font-bold text-blue-gray-900 mb-4">${product.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResultsScreen;
