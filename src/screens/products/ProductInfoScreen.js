import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalComponent from '../../components/modal/ModalComponent';

const ProductInfoScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod] = useState('cash_on_delivery');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  if (!product) {
    return <div className="text-center mt-20 text-red-600">Product not found or no data passed.</div>;
  }

  const handleAddToCart = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      if (!shippingAddress) {
        toast.error('Please enter a shipping address.');
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

      await axios.post(`${process.env.REACT_APP_BACKEND_APP_URL}/api/orders`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Order created successfully.');
      setIsModalOpen(false); // Close the modal after submission
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ToastContainer />
      <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-gray-900">{product.price} MAD</span>
            </div>

            <button
              className="bg-gray-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
              onClick={() => setIsModalOpen(true)} // Open modal on click
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

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
