import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.App';

// Define the logout function
function logOut() {
  // Your logout logic here
  console.log('Logging out...');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App logOut={logOut} /> {/* Pass the logout function as a prop */}
  </React.StrictMode>
);
