export interface Sale {
  id: string;
  date: string; // ISO string
  category: string;
  amount: number;
}

import { v4 as uuid } from 'uuid';

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

export function generateSales(year: number, count = 1000): Sale[] {
  const sales: Sale[] = [];
  for (let i = 0; i < count; i++) {
    sales.push({
      id: uuid(),
      date: randomDate(year),
      category: categories[Math.floor(Math.random() * categories.length)],
      amount: randomAmount(),
    });
  }
  return sales;
}