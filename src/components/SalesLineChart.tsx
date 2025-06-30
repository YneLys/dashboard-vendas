import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';

interface SeriesData {
  month: string;
  toys: number;
  pets: number;
}

interface SalesLineChartProps {
  data: SeriesData[];
}

const SalesLineChart: React.FC<SalesLineChartProps> = ({ data }) => {
  return (
    <div className="bg-accent p-6 rounded-2xl text-textLight shadow w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales</h2>
        <select className="bg-[#2B2B2B] border border-gray-700 px-2 py-1 rounded text-white text-sm">
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#333" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" tickFormatter={(val) => `$${val / 1000}k`} />
          <Tooltip
            contentStyle={{ backgroundColor: "#1F1F1F", border: "none" }}
            labelStyle={{ color: "#fff" }}
            formatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Legend />
          <Line type="monotone" dataKey="toys" stroke="#9C6BFF" strokeWidth={3} name="Toys" />
          <Line type="monotone" dataKey="pets" stroke="#34D399" strokeDasharray="5 5" strokeWidth={2} name="Animal Care Products" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesLineChart;
