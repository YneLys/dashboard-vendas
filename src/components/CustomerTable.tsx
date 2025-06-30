import React from 'react';

interface Customer {
  id: string;
  name: string;
  date: string;
  amount: number;
  status: 'Shipped' | 'Delivered' | 'Paid';
}

interface CustomerTableProps {
  customers: Customer[];
}

const statusColors: Record<string, string> = {
  Shipped: 'text-yellow-400',
  Delivered: 'text-green-400',
  Paid: 'text-blue-400',
};

const CustomerTable: React.FC<CustomerTableProps> = ({ customers }) => {
  return (
    <div className="bg-accent p-6 rounded-2xl text-textLight shadow w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Customer Details</h2>
        <div className="flex gap-2">
          <button className="bg-[#2B2B2B] border border-gray-700 px-3 py-1 rounded text-sm">Filter</button>
          <button className="bg-primary text-black px-3 py-1 rounded text-sm font-medium">Download</button>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-300">
        <thead className="text-xs text-gray-400 uppercase border-b border-gray-600">
          <tr>
            <th className="py-3 px-4">Id</th>
            <th className="py-3 px-4">Customer</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Invoiced Amount</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b border-gray-700 hover:bg-[#1F1F1F] transition">
              <td className="py-3 px-4">{customer.id}</td>
              <td className="py-3 px-4">{customer.name}</td>
              <td className="py-3 px-4">{customer.date}</td>
              <td className="py-3 px-4">${customer.amount.toLocaleString()}</td>
              <td className={`py-3 px-4 font-semibold ${statusColors[customer.status]}`}>
                {customer.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
