import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  navigate("/login")
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={() => navigate('/login')}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default HomePage;
