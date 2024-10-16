import React, { useEffect } from 'react';

const ModalComponent = ({ isOpen, onClose, onSubmit, quantity, setQuantity, name, setName, email, setEmail, phone, setPhone, shippingAddress, setShippingAddress }) => {
  useEffect(() => {
    // Retrieve user info from local storage when the modal opens
    if (isOpen) {
      const storedQuantity = localStorage.getItem('quantity');
      const storedName = localStorage.getItem('name');
      const storedEmail = localStorage.getItem('email');
      const storedPhone = localStorage.getItem('phone');
      const storedShippingAddress = localStorage.getItem('shippingAddress');

      if (storedQuantity) setQuantity(storedQuantity);
      if (storedName) setName(storedName);
      if (storedEmail) setEmail(storedEmail);
      if (storedPhone) setPhone(storedPhone);
      if (storedShippingAddress) setShippingAddress(storedShippingAddress);
    }
  }, [isOpen, setQuantity, setName, setEmail, setPhone, setShippingAddress]);

  const handleSubmit = () => {
    // Save user info to local storage
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('shippingAddress', shippingAddress);

    // Call the onSubmit function to handle order placement
    onSubmit();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-2xl mb-4">Order Information</h2>

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
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 w-full"
            placeholder="Ex: John Doe"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Your Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 w-full"
            placeholder="Ex: 0RbZs@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
            Your Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 w-full"
            placeholder="Ex: +212 000 000 000"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="shiping_address" className="block mb-2 text-sm font-medium text-gray-900">
            Your Shipping Address:
          </label>
          <textarea
            id="shiping_address"
            name="shiping_address"
            rows="4"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            className="border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200 w-full"
            placeholder="Ex: 123 Main St, Anytown, USA"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded-lg mr-2"
            onClick={handleSubmit}
          >
            Buy Now
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
