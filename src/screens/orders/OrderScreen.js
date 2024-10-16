import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderScreen = () => {
  const { id } = useParams(); // Get order ID from URL params
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setOrder(response.data.data);
        console.log(response.data.data.items);
      } catch (err) {
        setError('Failed to fetch order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  // Loading and Error States
  if (loading) {
    return <div className="text-gray-600 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  if (!order) {
    return <div className="text-gray-600 text-center">No order found.</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4 text-center">Order Details</h1>
          <OrderDetail label="Order ID" value={order.id} />
          <OrderDetail label="Name" value={order.name} />
          <OrderDetail label="Email" value={order.email} />
          <OrderDetail label="Phone" value={order.phone} />
          <OrderDetail label="Status" value={order.order_status} />
          <OrderDetail label="Total Price" value={`MAD ${order.total_price}`} />
          <OrderDetail label="Payment Method" value={order.payment_method} />
          <OrderDetail label="Shipping Address" value={order.shiping_address} />
          <OrderDetail label="Order Date" value={new Date(order.created_at).toLocaleString()} />

          {/* Image Section */}
          <img 
            src={`${process.env.REACT_APP_BACKEND_APP_URL}/storage/${order.image}`} 
            alt="Order Image" 
            className="w-full h-auto mb-6 object-cover" 
          />

          {/* Product Info Section */}
          <h2 className="text-xl font-semibold mb-4">Product Info:</h2>
          <ul className="space-y-4">
          {order.items.map((item, index) => {
                // Since item.product is undefined, we'll use item.product_name instead
                const productTitle = item.product_name || 'No product name available'; // Handle null case
                const productDescription = item.description || 'No description available'; // Optional

                return (
                    <li key={index} className="border-b pb-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                        {/* Placeholder image if item.product.image doesn't exist */}
                        <img 
                        src={`${process.env.REACT_APP_BACKEND_APP_URL}/storage/${item.image}`} 
                        alt={productTitle} 
                        className="w-full md:w-1/4 h-auto object-cover mb-4 md:mb-0 md:mr-4" 
                        />
                        <div>
                        <h3 className="text-lg font-semibold"><b>Product Name:</b> {productTitle}</h3>
                        <p className="text-gray-600"><b>Quantity:</b> {item.quantity}</p>
                        <p className="text-gray-600"><b>Price Of One Product:</b> MAD {item.price}</p>
                        <p className="text-gray-600"><b>Product Description:</b> {productDescription}</p>
                        </div>
                    </div>
                    </li>
                );
                })}
            </ul>
          {/* Final Command Button */}
          <div className="mt-6 text-center">
            <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition duration-200">
              Final Command
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// OrderDetail Component for better structure and reusability
const OrderDetail = ({ label, value }) => (
  <p className="text-gray-600 mb-2">
    <strong>{label}:</strong> {value}
  </p>
);

export default OrderScreen;
