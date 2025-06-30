# 📊 Sales Dashboard

A modern and responsive sales dashboard built with **React**, **TypeScript**, **Recharts**, and **TailwindCSS**, featuring:

- Interactive bar and line charts
- Responsive sidebar with navigation
- Customer table with status indicators
- Dynamic data generation and filtering
- Modern dark-themed UI inspired by Figma design

---

## 🚀 Features

### 🧩 Dashboard
- Monthly revenue bar chart
- Total revenue and orders for selected year
- Year filter (2005–2025)
- Sales generated with randomized mock data

### 📈 Sales Page
- Multi-series line chart (e.g. Toys vs Animal Products)
- Year dropdown filter
- Tooltip and legend
- Dark mode visual styling

### 👥 Customers Page
- Responsive customer table
- Fields: ID, Name, Date, Invoiced Amount, Status
- Colored status tags: Shipped (yellow), Delivered (green), Paid (blue)
- "Filter" and "Download" mock buttons

---

## 📁 Folder Structure

src/
│
├── components/
│ ├── Sidebar.tsx
│ ├── SalesBarChart.tsx
│ ├── SalesLineChart.tsx
│ └── CustomerTable.tsx
│
├── data/
│ └── sales.ts
│
├── pages/
│ ├── SalesPage.tsx
│ └── CustomersPage.tsx
│
├── App.tsx
├── main.tsx
└── index.css

markdown
Copy
Edit

---

## 🧑‍💻 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Recharts](https://recharts.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sales-dashboard.git
   cd sales-dashboard
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm run dev
📝 License
This project is open-source and free to use.