import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional CSS file
import App from './App'; // Import your App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Rendering the App component into the root div
);
