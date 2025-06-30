# 📊 Sales Dashboard

A modern and responsive sales dashboard built with **React**, **TypeScript**, **Recharts**, and **TailwindCSS**, featuring:

- Interactive bar and line charts
- Responsive sidebar with navigation and icons
- Customer table with filter and Excel export
- Dynamic data filtering by year
- Dark UI inspired by Figma design

---

## 🚀 Features

### 🧩 Dashboard
- Monthly revenue bar chart with mock data
- Year filter (2005–2025)
- Displays total revenue and number of orders

### 📈 Sales Page
- Multi-series line chart comparing product categories (e.g. Toys vs Animal Products)
- Year dropdown filter
- Tooltip and legend with custom styling

### 👥 Customers Page
- Responsive table: ID, Name, Date, Invoiced Amount, Status
- Status color tags (Shipped - yellow, Delivered - green, Paid - blue)
- Dropdown filter by status
- Excel download button (filtered data only)

---

## 📁 Project Structure

src/
├── components/
│ ├── Sidebar.tsx
│ ├── SalesBarChart.tsx
│ ├── SalesLineChart.tsx
│ └── CustomerTable.tsx
├── data/
│ └── sales.ts
├── pages/
│ ├── SalesPage.tsx
│ └── CustomersPage.tsx
├── App.tsx
├── main.tsx
└── index.css

yaml
Copy
Edit

---

## 🧑‍💻 Tech Stack

- React
- TypeScript
- TailwindCSS
- Recharts
- XLSX + file-saver (for Excel export)
- Lucide Icons
- Vite

---

## 📦 Getting Started

1. **Clone the repo**  
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
Open http://localhost:3000

⚙️ Routing
/ → Dashboard

/sales → Sales Page

/customers → Customers Page

📝 License
This project is open-source and free to use.