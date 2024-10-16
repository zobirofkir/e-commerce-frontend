import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CartScreen = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          setError('No access token found');
          setLoading(false);
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/orders`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setOrders(response.data.data);
      } catch (err) {
        console.error(err); 
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleViewOrder = (order) => {
    navigate(`/orders/${order.id}`, { state: { order } });
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          setError('No access token found');
          return;
        }

        await axios.delete(`${process.env.REACT_APP_BACKEND_APP_URL}/api/orders/${orderId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setOrders(orders.filter(order => order.id !== orderId));
        alert('Order deleted successfully!');
      } catch (err) {
        console.error(err); // Log error for debugging
        setError('Failed to delete order');
      }
    }
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <p className="text-gray-600 mb-4">Total Price: MAD {order.total_price}</p>
                <ul className="mb-4">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-gray-600">
                      {item.product_name ? (
                        `${item.product_name}`
                      ) : (
                        "Unnamed Product"
                      )} 
                      (Quantity: {item.quantity}) - MAD {item.price}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleViewOrder(order)}
                  className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition mr-2"
                >
                  Complete Order
                </button>
                <button
                  onClick={() => handleDeleteOrder(order.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition"
                >
                  Delete Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
