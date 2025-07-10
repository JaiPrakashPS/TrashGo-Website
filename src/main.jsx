import React from 'react'; // 👈 This is what you're missing
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind CSS styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
