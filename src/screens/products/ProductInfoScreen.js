import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalComponent from "../../components/modal/ModalComponent";

const ProductInfoScreen = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const token = localStorage.getItem("accessToken");

  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod] = useState("cash_on_delivery");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || product?.image
  ); // Primary image

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600">
        Product not found or no data passed.
      </div>
    );
  }

  const handleAddToCart = async () => {
    try {
      if (!token) {
        window.location.href = "/login";
      }

      if (!shippingAddress) {
        toast.error("Please enter a shipping address.");
        return;
      }

      const orderData = {
        products: [
          {
            id: product.id,
            quantity: quantity,
          },
        ],
        shiping_address: shippingAddress,
        payment_method: paymentMethod,
        name: name,
        email: email,
        phone: phone,
      };

      await axios.post(
        `${process.env.REACT_APP_BACKEND_APP_URL}/api/orders`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Order created successfully.");
      setIsModalOpen(false); // Close the modal after submission
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 py-[100px]">
      <ToastContainer />
      <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full max-w-md object-cover rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105"
            />
            <div className="flex space-x-2 mt-4">
              {product.images &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name}-${index}`}
                    className="w-20 h-20 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                    onClick={() => setMainImage(image)}
                  />
                ))}
            </div>
          </div>

          {/* Product details */}
          <div>
            <h1 className="text-5xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-gray-900">
                {product.price} MAD
              </span>
            </div>

            <button
              className="bg-gray-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal for purchasing */}
      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddToCart}
        quantity={quantity}
        setQuantity={setQuantity}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        shippingAddress={shippingAddress}
        setShippingAddress={setShippingAddress}
      />
    </div>
  );
};

export default ProductInfoScreen;
