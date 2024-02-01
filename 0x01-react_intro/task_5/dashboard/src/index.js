import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

// Create roots for both 'root' and 'root-notifications'
const root = ReactDOM.createRoot(document.getElementById('root'));
const notificationsRoot = ReactDOM.createRoot(document.getElementById('root-notifications'));

// Render the App component in the 'root' container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render the Notifications component in the 'root-notifications' container
notificationsRoot.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
