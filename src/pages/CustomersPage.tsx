import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CustomerTable, { Customer } from '../components/CustomerTable';
import { customersData } from '../data/customers';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const CustomersPage: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>('');

  const filteredCustomers: Customer[] = filterStatus
    ? customersData.filter(c => c.status === filterStatus)
    : customersData;

  const handleDownload = () => {
    const worksheetData = filteredCustomers.map(({ id, name, date, invoicedAmount, status }) => ({
      ID: id,
      Name: name,
      Date: date,
      'Invoiced Amount': invoicedAmount,
      Status: status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Customers');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'customers.xlsx');
  };

  return (
    <div className="flex min-h-screen bg-darkBg text-white font-poppins">
      <Sidebar />
      <main className="ml-60 flex-1 p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">👥 Customers Page</h1>

        <div className="mb-4">
          <label htmlFor="statusFilter" className="mr-3 font-medium">Filter by Status:</label>
          <select
            id="statusFilter"
            className="bg-accent text-white px-3 py-2 rounded-md"
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="Paid">Paid</option>
            <option value="Delivered">Delivered</option>
            <option value="Shipped">Shipped</option>
          </select>
        </div>

        <CustomerTable customers={filteredCustomers} />

        <div className="mt-6 flex gap-3">
          <button
            className="bg-primary text-black font-semibold px-5 py-2 rounded hover:bg-yellow-400 transition"
            onClick={() => setFilterStatus('')}
          >
            Clear Filter
          </button>
          <button
            className="bg-primary text-black font-semibold px-5 py-2 rounded hover:bg-yellow-400 transition"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      </main>
    </div>
  );
};

export default CustomersPage;
