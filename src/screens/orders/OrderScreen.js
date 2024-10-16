import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';

const OrderScreen = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [emailStatus, setEmailStatus] = useState(null);
  const [emailSent, setEmailSent] = useState(false); 

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
        console.log(response.data.data);
        setEmailSent(false);
        console.log(response.data.data.items);
      } catch (err) {
        setError('Failed to fetch order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  const handleFinalCommand = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      await axios.post(`${process.env.REACT_APP_BACKEND_APP_URL}/api/send-email`, {
        orderId: order.id,
        email: order.email,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setEmailStatus('Thank you for your order, we will contact you soon!'); 
      setEmailSent(true); 
    } catch (err) {
      setEmailStatus('Failed to send email.'); 
    }
  };

  // Function to generate PDF
  const downloadPDF = () => {


    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.setFont('Helvetica', 'bold');
    const text = 'Order Details';
    const textWidth = doc.getTextWidth(text);
    const pageWidth = doc.internal.pageSize.getWidth();
    const x = (pageWidth - textWidth) / 2; 
    
    doc.setTextColor(255, 0, 0);
    
    doc.text(text, x, 22);
    doc.setTextColor(0, 0, 0); 
    

    
    doc.setFontSize(12);

    

    const details = [
      { label: 'Name', value: order.name },
      { label: 'Email', value: order.email },
      { label: 'Phone', value: order.phone },
      { label: 'Total Price', value: `MAD ${order.total_price}` },
      { label: 'Shipping Address', value: order.shipping_address },
      { label: 'Order Date', value: new Date(order.created_at).toLocaleString() },
    ];
    
    let y = 30;
    details.forEach((detail) => {
      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(0, 128, 0); 
      
      doc.text(`${detail.label}:`, 14, y);
      
      doc.setTextColor(0, 0, 0);
      doc.text(String(detail.value), 70, y);
      doc.setFont('Helvetica', 'bold');
      
      y += 10;
    });
    

    const productText = 'Product Info';
    const productTextWidth = doc.getTextWidth(productText);
    const productPageWidth = doc.internal.pageSize.getWidth();
    const productX = (productPageWidth - productTextWidth) / 2;
    
    doc.setTextColor(255, 0, 0);
    doc.text(productText, productX, y + 10);
    doc.setTextColor(0, 0, 0);

    y += 20;

    order.items.forEach((item, index) => {
      const productTitle = item.product_name || 'No product name available'; 
      const productDescription = item.description || 'No description available'; 
    
      doc.setTextColor(255, 130, 0); 
      doc.text(`Product Name:`, 14, y); 
      
      doc.setTextColor(0, 0, 0);
      doc.text(productTitle, 70, y);
      
    
      doc.setTextColor(255, 130, 0); 
      doc.text(`Quantity:`, 14, y + 10);
      
      doc.setTextColor(0, 0, 0);
      doc.text(`${item.quantity}`, 70, y + 10); 
    
      doc.setTextColor(255, 130, 0); 
      doc.text(`Price Of One Product:`, 14, y + 20); 
    
      doc.setTextColor(0, 0, 0);
      doc.text(`MAD ${item.price}`, 70, y + 20); 
    
      doc.setTextColor(255, 130, 0); 
      doc.text(`Product Description:`, 14, y + 30); 
      
      doc.setTextColor(0, 0, 0);
      doc.text(productDescription, 70, y + 30); 
    
      y += 60; 
    });
        
    doc.save(`${order.name}.pdf`);
  };

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
          <OrderDetail label="Total Price" value={`MAD ${order.total_price}`} />
          <OrderDetail label="Shipping Address" value={order.shipping_address} />
          <OrderDetail label="Order Date" value={new Date(order.created_at).toLocaleString()} />

          <img 
            src={`${process.env.REACT_APP_BACKEND_APP_URL}/storage/${order.image}`} 
            alt="Order Image" 
            className="w-full h-auto mb-6 object-cover" 
          />

          <h2 className="text-xl font-semibold mb-4">Product Info:</h2>
          <ul className="space-y-4">
            {order.items.map((item, index) => {
                const productTitle = item.product_name || 'No product name available'; 
                const productDescription = item.description || 'No description available'; 

                return (
                    <li key={index} className="border-b pb-4">
                      <div className="flex flex-col md:flex-row items-start md:items-center">
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

          {/* Complete Order Button */}
          {order && (
            <div className="mt-6 text-center">
              <button 
                className={`bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition duration-200 ${emailSent ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleFinalCommand}
                disabled={emailSent} 
              >
                {emailSent ? 'Email Sent' : 'Complete Order'}
              </button>
              <button 
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200 ml-4"
                onClick={downloadPDF}
              >
                Download PDF
              </button>
            </div>
          )}

          {emailStatus && (
            <div className="mt-4 text-center">
              <p className={`text-lg ${emailStatus.includes('successfully') ? 'text-green-500' : 'text-red-600'}`}>
                {emailStatus}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const OrderDetail = ({ label, value }) => (
  <p className="text-gray-600 mb-2">
    <strong>{label}:</strong> {value}
  </p>
);

export default OrderScreen;
