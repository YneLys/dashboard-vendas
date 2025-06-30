import React from 'react';
import Sidebar from '../components/Sidebar';
import CustomerTable from '../components/CustomerTable';

const customers: {
  id: string;
  name: string;
  date: string;
  amount: number;
  status: 'Shipped' | 'Delivered' | 'Paid';
}[] = [
  { id: 'RZ17308', name: 'Pranjalpets', date: '13/01/2022', amount: 54000, status: 'Shipped' },
  { id: 'RZ8308', name: 'Adom.com', date: '13/01/2022', amount: 86050, status: 'Delivered' },
  { id: 'RZ8765', name: 'Charles Tea', date: '13/01/2022', amount: 4000, status: 'Paid' },
];

const CustomersPage: React.FC = () => {
  return (
    <div className="flex bg-darkBg min-h-screen">
      <Sidebar />
      <main className="ml-60 p-8 w-full max-w-7xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">👥 Customer List</h1>
        <CustomerTable customers={customers} />
      </main>
    </div>
  );
};

export default CustomersPage;
