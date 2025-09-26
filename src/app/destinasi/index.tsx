// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';  // Impor file CSS untuk styling
import App from './App';  // Import komponen utama aplikasi

// Menyediakan root element untuk aplikasi React
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Merender aplikasi ke dalam root div
root.render(
  <React.StrictMode>
    <Router>  {/* Membungkus aplikasi dengan Router untuk routing */}
      <App />  {/* Komponen utama aplikasi */}
    </Router>
  </React.StrictMode>
);
