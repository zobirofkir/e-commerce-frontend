import React, { useEffect, useState } from 'react';
import OfferCardComponent from './OfferCardComponent';

const OffersComponent = () => {
  const [offers, setOffers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const createTestOffers = () => {
      // Hardcoded test offers with image URLs
      const testOffers = [
        { 
          slug: "slug-offer-number-1", 
          title: '50% Off on All Items', 
          description: 'Enjoy a massive discount on all our products.', 
          price: '$50', 
          image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=50%25+Off' // Example image URL 
        },
        { 
          slug: "slug-offer-number-2", 
          title: 'Buy One Get One Free', 
          description: 'Purchase any item and get another one for free.', 
          price: '$30', 
          image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=BOGO' // Example image URL 
        },
        { 
          slug: "slug-offer-number-3", 
          title: 'Free Shipping on Orders Over $75', 
          description: 'Shop now and enjoy free shipping on all orders above $75.', 
          price: '$75', 
          image: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Free+Shipping' // Example image URL 
        },
      ];
      
      setOffers(testOffers);
      setError(null);
    };
    

    setTimeout(() => {
      createTestOffers();
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading offers...</div>; 
  if (error) return <div>{error}</div>; 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {offers.length > 0 ? (
        offers.map((offer) => (
          <OfferCardComponent key={offer.slug} offer={offer} /> 
        ))
      ) : (
        <div>No current offers available.</div>
      )}
    </div>
  );
};

export default OffersComponent;
