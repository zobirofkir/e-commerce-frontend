import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>This is a protected component</h1>
    </div>
  );
};

export default ProtectedComponent;
