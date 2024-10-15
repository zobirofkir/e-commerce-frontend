import React from 'react';
import { useNavigate } from 'react-router-dom';

const OfferCardComponent = ({ offer }) => {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate(`/products/${offer.slug}`, { state: { product: offer } });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
      <div className='p-4'>
        <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
        <p className="text-gray-600 mb-4">{offer.description.substring(0, 50) + '...'}</p>
        <div className="text-lg font-bold text-blue-gray-900 mb-4">{offer.price}</div>
        <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition" onClick={handleBuyNowClick}>
            Buy Now
        </button>
      </div>
    </div>
  );
};

export default OfferCardComponent;
