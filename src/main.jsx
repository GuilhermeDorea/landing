import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Palette trial: ?p=laranja | ceu | menta
const palette = new URLSearchParams(location.search).get('p');
if (palette) document.documentElement.dataset.p = palette;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
