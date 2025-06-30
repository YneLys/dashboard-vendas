import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SalesPage from './pages/SalesPage';
import CustomersPage from './pages/CustomersPage';

<Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/sales" element={<SalesPage />} />
    <Route path="/customers" element={<CustomersPage />} />
  </Routes>
</Router>
