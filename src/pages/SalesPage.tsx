import React from 'react';
import Sidebar from '../components/Sidebar';
import SalesLineChart from '../components/SalesLineChart';

const sampleData = [
  { month: 'Jan', toys: 20000, pets: 22000 },
  { month: 'Feb', toys: 27000, pets: 24000 },
  { month: 'Mar', toys: 18000, pets: 30000 },
  { month: 'Apr', toys: 25000, pets: 28000 },
  { month: 'May', toys: 30000, pets: 33000 },
  { month: 'Jun', toys: 40000, pets: 35000 },
  { month: 'Jul', toys: 47000, pets: 36000 },
  { month: 'Aug', toys: 43000, pets: 39000 },
  { month: 'Sep', toys: 37000, pets: 34000 },
  { month: 'Oct', toys: 32000, pets: 29000 },
  { month: 'Nov', toys: 30000, pets: 26000 },
  { month: 'Dec', toys: 28000, pets: 25000 },
];

const SalesPage: React.FC = () => {
  return (
    <div className="flex bg-darkBg min-h-screen">
      <Sidebar />
      <main className="ml-60 p-8 w-full max-w-7xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">📈 Sales Overview</h1>
        <SalesLineChart data={sampleData} />
      </main>
    </div>
  );
};

export default SalesPage;
