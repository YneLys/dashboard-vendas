import React from 'react';

interface YearFilterProps {
  selectedYear: number;
  years: number[];
  onChange: (year: number) => void;
}

const YearFilter: React.FC<YearFilterProps> = ({ selectedYear, years, onChange }) => {
  return (
    <div className="flex items-center gap-2 text-white">
      <label htmlFor="year-select" className="text-base font-medium">Filtrar por Ano:</label>
      <select
        id="year-select"
        value={selectedYear}
        onChange={(e) => onChange(Number(e.target.value))}
        className="bg-accent border border-gray-700 text-white px-3 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {years.map((year) => (
          <option key={year} value={year} className="text-black">
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearFilter;
