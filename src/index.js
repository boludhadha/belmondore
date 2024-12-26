import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'; // Import your styles
import App from './App'; // Import the root component (App.js)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
