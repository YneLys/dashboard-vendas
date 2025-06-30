import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

interface MonthlySales {
  month: string;
  total: number;
}

interface SalesBarChartProps {
  data: MonthlySales[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-accent text-white px-3 py-2 rounded shadow">
        <p className="text-sm font-semibold">{payload[0].payload.month}</p>
        <p className="text-sm">R$ {payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

const SalesBarChart: React.FC<SalesBarChartProps> = ({ data }) => {
  return (
    <div className="bg-accent p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Vendas por Mês</h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBarChart;
