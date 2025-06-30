import React from 'react';

export interface Customer {
  id: number;
  name: string;
  date: string;
  invoicedAmount: number;
  status: 'Shipped' | 'Delivered' | 'Paid';
}

export interface CustomerTableProps {
  customers: Customer[];
}

const statusColors = {
  Shipped: 'bg-yellow-400 text-yellow-900',
  Delivered: 'bg-green-500 text-green-900',
  Paid: 'bg-blue-500 text-blue-900',
};

const CustomerTable: React.FC<CustomerTableProps> = ({ customers }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-textLight">
        <thead className="border-b border-gray-700">
          <tr>
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Invoiced Amount</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(({ id, name, date, invoicedAmount, status }) => (
            <tr key={id} className="border-b border-gray-800 hover:bg-accent">
              <td className="py-3 px-4">{id}</td>
              <td className="py-3 px-4">{name}</td>
              <td className="py-3 px-4">{date}</td>
              <td className="py-3 px-4">R$ {invoicedAmount.toFixed(2)}</td>
              <td className="py-3 px-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    statusColors[status]
                  }`}
                >
                  {status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

   
    </div>
  );
};

export default CustomerTable;
