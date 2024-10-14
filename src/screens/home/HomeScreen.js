import React from "react";
import SliderComponent from "../../components/slider/SliderComponent";
import ProductScreen from "../../components/products/ProductComponent";
import CategoryComponent from "../../components/categories/CategoryComponent";

const HomeScreen = () => {
  return (
    <div className="container mx-auto">
      <CategoryComponent />
      <SliderComponent />
      <ProductScreen />
    </div>
  );
};

export default HomeScreen;
