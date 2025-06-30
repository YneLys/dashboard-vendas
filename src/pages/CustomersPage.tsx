import React from 'react';
import Sidebar from '../components/Sidebar';
import CustomerTable from '../components/CustomerTable';
import { customersData } from '../data/customers';

const CustomersPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-darkBg text-white font-poppins">
      <Sidebar />
      <main className="ml-60 flex-1 p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">👥 Customers Page</h1>
        {/* Passa os dados mock para o componente */}
        <CustomerTable customers={customersData} />
      </main>
    </div>
  );
};

export default CustomersPage;
