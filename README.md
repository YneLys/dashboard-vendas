# 📊 Sales Dashboard

This project is a Sales Dashboard interface built with React, TypeScript, TailwindCSS, and Recharts.

## Features

- Interactive sales charts using Recharts
- Dynamic year filter with range from 2005 to 2025
- Mock sales data generated for multiple years (2005–2025)
- Sales summary cards (total revenue and total orders)
- Strong typing with TypeScript
- Reusable components
- Responsive layout styled with TailwindCSS

## Installation

1. Clone the repository:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Open your browser and navigate to the address shown (usually http://localhost:5173).

Project Structure
bash
Copy
Edit
dashboard-vendas/
├── src/
│   ├── components/
│   │   ├── SalesBarChart.tsx       # Bar chart component using Recharts
│   │   └── YearFilter.tsx          # Dropdown filter component for selecting year
│   ├── data/
│   │   └── sales.ts                # Mock sales data generator (2005–2025)
│   ├── App.tsx                    # Main app component integrating all parts
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── README.md
└── ...
Dependencies
React 18

TypeScript

Vite (dev server and build tool)

TailwindCSS for styling

Recharts for charts

uuid for unique IDs in mock data

Notes
The sales data is generated randomly for years 2005 through 2025, with 300 entries per year.

The year filter dynamically lists all years in this range.

The bar chart displays total sales amount grouped by month for the selected year.

The dashboard includes summary cards showing total revenue and total orders filtered by year.

Contributing
Feel free to fork and send pull requests with improvements or new features!

License
MIT