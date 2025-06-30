import React, { useState, useMemo } from 'react';
import { generateSalesForYears, Sale } from './data/sales';
import YearFilter from './components/YearFilter';
import SalesBarChart from './components/SalesBarChart';
import Sidebar from './components/Sidebar';

const AVAILABLE_YEARS = Array.from({ length: 2025 - 2005 + 1 }, (_, i) => 2005 + i);

function monthName(monthIndex: number): string {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][monthIndex];
}

const App: React.FC = () => {
  const [year, setYear] = useState<number>(AVAILABLE_YEARS[0]);
  const [sales] = useState<Sale[]>(() => generateSalesForYears(2005, 2025, 300));

  const filteredSales = useMemo(() => {
    return sales.filter(sale => new Date(sale.date).getFullYear() === year);
  }, [sales, year]);

  const monthlyData = useMemo(() => {
    const totals = new Array(12).fill(0);
    filteredSales.forEach(sale => {
      const month = new Date(sale.date).getMonth();
      totals[month] += sale.amount;
    });
    return totals.map((total, i) => ({
      month: monthName(i),
      total: parseFloat(total.toFixed(2)),
    }));
  }, [filteredSales]);

  const totalRevenue = useMemo(() => filteredSales.reduce((acc, s) => acc + s.amount, 0), [filteredSales]);
  const totalOrders = filteredSales.length;

  return (
    <div className="flex bg-darkBg min-h-screen text-white font-poppins">
      <Sidebar />

      <main className="ml-60 p-8 w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">📊 Dashboard de Vendas</h1>

        <div className="mb-6">
          <YearFilter selectedYear={year} years={AVAILABLE_YEARS} onChange={setYear} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-accent p-6 rounded-2xl shadow text-center text-textLight">
            <h2 className="text-lg font-semibold mb-2">Total Faturado</h2>
            <p className="text-3xl font-bold text-primary">R$ {totalRevenue.toFixed(2)}</p>
          </div>
          <div className="bg-accent p-6 rounded-2xl shadow text-center text-textLight">
            <h2 className="text-lg font-semibold mb-2">Total Pedidos</h2>
            <p className="text-3xl font-bold">{totalOrders}</p>
          </div>
        </div>

        <SalesBarChart data={monthlyData} />
      </main>
    </div>
  );
};

export default App;
