import React from 'react';

interface YearFilterProps {
  selectedYear: number;
  years: number[];
  onChange: (year: number) => void;
}

const YearFilter: React.FC<YearFilterProps> = ({ selectedYear, years, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="year-select" className="mr-2 font-semibold">Filtrar por Ano:</label>
      <select
        id="year-select"
        className="border rounded px-2 py-1"
        value={selectedYear}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default YearFilter;