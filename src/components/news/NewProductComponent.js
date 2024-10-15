import React, { useEffect, useState } from 'react';
import NewProductCardComponent from './NewProductCardComponent';

const NewProductComponent = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const testNewProducts = [
          { 
            slug: "slug-new-product-number-1", 
            title: '50% Off on All Items', 
            description: 'Enjoy a massive discount on all our products.', 
            price: '$50', 
            image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=50%25+Off' // Example image URL 
          },
          { 
            slug: "slug-new-product-number-2", 
            title: 'Buy One Get One Free', 
            description: 'Purchase any item and get another one for free.', 
            price: '$30', 
            image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=BOGO' // Example image URL 
          },
          { 
            slug: "slug-new-product-number-3", 
            title: 'Free Shipping on Orders Over $75', 
            description: 'Shop now and enjoy free shipping on all orders above $75.', 
            price: '$75', 
            image: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Free+Shipping' // Example image URL 
          },
        ];

        setNewProducts(testNewProducts);
      } catch (err) {

        setError('Failed to fetch new products. Please try again later.');
      } finally {

        setLoading(false);
      }
    };

    fetchNewProducts();
  }, []);

  if (loading) return <div>Loading new products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {newProducts.length > 0 ? (
        newProducts.map((product) => (
          <NewProductCardComponent key={product.slug} product={product} /> // Use slug as the key
        ))
      ) : (
        <div>No new products available.</div>
      )}
    </div>
  );
};

export default NewProductComponent;
