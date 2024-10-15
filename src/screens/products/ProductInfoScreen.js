import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductInfoScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash_on_delivery');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

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
        setError('Please provide a valid shipping address.');
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
      };

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_APP_URL}/api/orders`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage('Order created successfully!');
      setError('');
    } catch (error) {
      setError('Failed to create order. Please try again.');
      setMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
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

            <div className="mt-8">
              <div className="mb-6">
                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 w-full"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="shiping_address" className="block mb-2 text-sm font-medium text-gray-900">
                  Shipping Address
                </label>
                <textarea
                  id="shiping_address"
                  name="shiping_address"
                  rows="4"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 w-full"
                />
              </div>

              <button
                className="bg-gray-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              {message && <p className="text-green-600 mt-4">{message}</p>}
              {error && <p className="text-red-600 mt-4">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoScreen;
