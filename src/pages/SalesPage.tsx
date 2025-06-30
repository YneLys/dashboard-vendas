import React, { useState, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import YearFilter from '../components/YearFilter';
import SalesLineChart from '../components/SalesLineChart';
import { generateSalesForYears, Sale } from '../data/sales';

const AVAILABLE_YEARS = Array.from({ length: 2025 - 2005 + 1 }, (_, i) => 2005 + i);

const SalesPage: React.FC = () => {
  const [year, setYear] = useState<number>(AVAILABLE_YEARS[0]);
  const [sales] = useState<Sale[]>(() => generateSalesForYears(2005, 2025, 300));

  const filteredSales = useMemo(() => {
    return sales.filter(sale => new Date(sale.date).getFullYear() === year);
  }, [sales, year]);

  return (
    <div className="flex min-h-screen bg-darkBg text-white font-poppins">
      <Sidebar />
      <main className="ml-60 flex-1 p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📈 Sales Page</h1>
        <div className="mb-6 max-w-xs">
          <YearFilter selectedYear={year} years={AVAILABLE_YEARS} onChange={setYear} />
        </div>
        {/* Passa o array filtrado para SalesLineChart */}
        <SalesLineChart data={filteredSales} />
      </main>
    </div>
  );
};

export default SalesPage;
