export interface Sale {
  date: string;
  amount: number;
  category: 'Toys' | 'Animal Care';
}

// Gera dados mock randomizados
export function generateSalesForYears(startYear: number, endYear: number, count: number): Sale[] {
  const sales: Sale[] = [];
  for (let i = 0; i < count; i++) {
    const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1;
    const category = Math.random() > 0.5 ? 'Toys' : 'Animal Care';
    const amount = parseFloat((Math.random() * 500).toFixed(2));

    sales.push({
      date: new Date(year, month, day).toISOString(),
      amount,
      category,
    });
  }
  return sales;
}

