import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa Tailwind CSS e fonte
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SalesPage from './pages/SalesPage';
import CustomersPage from './pages/CustomersPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
