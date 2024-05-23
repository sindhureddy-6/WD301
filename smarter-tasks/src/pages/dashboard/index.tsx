import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
const navigate = useNavigate();
  useEffect(() => {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    } else {
      console.error('No user data found in localStorage');
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
      setUserData(null); 
      navigate("/signin")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
        <div id="user-info">
          <p>Name: <span id="user-name">{userData?.name}</span></p>
          <p>Email: <span id="user-email">{userData?.email}</span></p>
        </div>
        <button
          onClick={handleClick}
          id="logout-link"
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 mt-4 rounded"
        >
          Log-out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;