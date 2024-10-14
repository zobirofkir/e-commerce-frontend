import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="flex flex-col items-center ">
        <h2 className="text-lg font-semibold">CSW SHOP</h2>
        <p>&copy; {new Date().getFullYear()} csw shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
