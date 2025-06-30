import { v4 as uuid } from 'uuid';

export interface Sale {
  id: string;
  date: string; // ISO string
  category: string;
  amount: number;
}

const categories = ['Eletrônicos', 'Roupas', 'Alimentos', 'Brinquedos', 'Livros'];

function randomDate(year: number): string {
  const start = new Date(year, 0, 1).getTime();
  const end = new Date(year, 11, 31).getTime();
  const date = new Date(start + Math.random() * (end - start));
  return date.toISOString();
}

function randomAmount() {
  return +(Math.random() * 1000).toFixed(2);
}

// Gera vendas para cada ano no intervalo [startYear, endYear]
export function generateSalesForYears(startYear: number, endYear: number, countPerYear = 500): Sale[] {
  const sales: Sale[] = [];
  for (let year = startYear; year <= endYear; year++) {
    for (let i = 0; i < countPerYear; i++) {
      sales.push({
        id: uuid(),
        date: randomDate(year),
        category: categories[Math.floor(Math.random() * categories.length)],
        amount: randomAmount(),
      });
    }
  }
  return sales;
}
