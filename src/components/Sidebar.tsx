import React from 'react';
import {
  BarChart2,
  ShoppingCart,
  Users,
  Settings,
} from 'lucide-react';

const navItems = [
  { icon: <BarChart2 size={20} />, label: 'Dashboard' },
  { icon: <ShoppingCart size={20} />, label: 'Vendas' },
  { icon: <Users size={20} />, label: 'Clientes' },
  { icon: <Settings size={20} />, label: 'Configurações' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-60 bg-[#1E1E1E] text-white h-screen px-6 py-8 fixed top-0 left-0 shadow-lg z-50">
      <h1 className="text-xl font-bold mb-10">💼 MySales</h1>
      <nav className="flex flex-col gap-6">
        {navItems.map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 text-sm hover:text-primary transition-colors cursor-pointer"
          >
            {icon}
            <span>{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
