import React, { useState, useMemo } from 'react';
import { generateSalesForYears, Sale } from './data/sales';
import YearFilter from './components/YearFilter';
import SalesBarChart from './components/SalesBarChart';

const AVAILABLE_YEARS = Array.from({ length: 2025 - 2005 + 1 }, (_, i) => 2005 + i);

function monthName(monthIndex: number): string {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][monthIndex];
}

const App: React.FC = () => {
  const [year, setYear] = useState<number>(AVAILABLE_YEARS[0]);
  const [sales] = useState<Sale[]>(() => generateSalesForYears(2005, 2025, 300));

  // Filtra vendas do ano selecionado
  const filteredSales = useMemo(() => {
    return sales.filter(sale => new Date(sale.date).getFullYear() === year);
  }, [sales, year]);

  // Agrupa vendas por mês para o gráfico
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

  // Totais para os cards
  const totalRevenue = useMemo(() => filteredSales.reduce((acc, s) => acc + s.amount, 0), [filteredSales]);
  const totalOrders = filteredSales.length;

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Dashboard de Vendas</h1>

      <YearFilter selectedYear={year} years={AVAILABLE_YEARS} onChange={setYear} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-semibold mb-2">Total Faturado</h2>
          <p className="text-2xl font-bold text-green-600">R$ {totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-semibold mb-2">Total Pedidos</h2>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>
      </div>

      <SalesBarChart data={monthlyData} />
    </main>
  );
};

export default App;
