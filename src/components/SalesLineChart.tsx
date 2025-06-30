import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface Sale {
  date: string; // ISO string
  amount: number;
  category: 'Toys' | 'Animal Care';
}

export interface SalesLineChartProps {
  data: Sale[];
}

// Função para agregar dados por mês e categoria
function aggregateMonthlyData(data: Sale[]) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  // Inicializa objeto com meses e categorias zerados
  const monthlyTotals = months.map(month => ({
    month,
    Toys: 0,
    'Animal Care': 0,
  }));

  data.forEach(sale => {
    const date = new Date(sale.date);
    const monthIndex = date.getMonth();
    if (sale.category === 'Toys' || sale.category === 'Animal Care') {
      monthlyTotals[monthIndex][sale.category] += sale.amount;
    }
  });

  // Arredonda valores
  return monthlyTotals.map(m => ({
    ...m,
    Toys: parseFloat(m.Toys.toFixed(2)),
    'Animal Care': parseFloat(m['Animal Care'].toFixed(2)),
  }));
}

const SalesLineChart: React.FC<SalesLineChartProps> = ({ data }) => {
  const chartData = aggregateMonthlyData(data);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData} margin={{ top: 20, right: 40, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" stroke="#EAEAEA" />
        <YAxis stroke="#EAEAEA" />
        <Tooltip
          contentStyle={{ backgroundColor: '#1E1E1E', borderRadius: '8px' }}
          labelStyle={{ color: '#F4D03F' }}
        />
        <Legend
          wrapperStyle={{ color: '#EAEAEA' }}
          verticalAlign="top"
          height={36}
        />
        <Line
          type="monotone"
          dataKey="Toys"
          stroke="#F4D03F"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Animal Care"
          stroke="#3A3B3C"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;
