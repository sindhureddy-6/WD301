import React from 'react';

const Dashboard: React.FC = () => {
const userDataString = localStorage.getItem('userData');
if (userDataString) {
    const userData = JSON.parse(userDataString);

    // Assuming userData has properties 'name' and 'email'
    const userNameElement = document.getElementById('user-name');
    const userEmailElement = document.getElementById('user-email');

    if (userNameElement && userEmailElement) {
        userNameElement.textContent = userData.name;
        userEmailElement.textContent = userData.email;
    } else {
        console.error('User info elements not found in the DOM');
    }
} else {
    console.error('No user data found in localStorage');
}
    const handleClick = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
      }
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
          <div id="user-info">
        <p>Name: <span id="user-name"></span></p>
        <p>Email: <span id="user-email"></span></p>
          </div>
          <button onClick={handleClick} id="logout-link" className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2  mt-4 rounded">Log-out</button>
    </div>
  );
}

export default Dashboard;