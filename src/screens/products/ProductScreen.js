import React from 'react';
import SliderComponent from '../../components/slider/SliderComponent';
import ProductComponent from '../../components/products/ProductComponent';
import CategoryComponent from '../../components/categories/CategoryComponent';
import NewProductComponent from '../../components/products/NewProductComponent'; // New component for new products
import OffersComponent from '../../components/products/OffersComponent'; // New component for offers

const ProductScreen = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-28">
      <CategoryComponent />
      <SliderComponent />
      
      {/* New Products Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">New Products</h2>
        <NewProductComponent /> {/* Component for new products */}
      </div>
      
      {/* Offers Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Special Offers</h2>
        <OffersComponent /> {/* Component for offers */}
      </div>
      
      {/* Existing Product Component */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductScreen;
