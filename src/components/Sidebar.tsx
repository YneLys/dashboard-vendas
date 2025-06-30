import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BarChart2,
  ShoppingCart,
  Users,
  Settings,
} from 'lucide-react';

const navItems = [
  { icon: <BarChart2 size={20} />, label: 'Dashboard', to: '/' },
  { icon: <ShoppingCart size={20} />, label: 'Vendas', to: '/sales' },
  { icon: <Users size={20} />, label: 'Clientes', to: '/customers' },
  { icon: <Settings size={20} />, label: 'Configurações', to: '/settings' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-60 bg-darkBg text-white h-screen px-6 py-8 fixed top-0 left-0 shadow-lg z-50 font-poppins">
      <h1 className="text-xl font-bold mb-10">💼 MySales</h1>
      <nav className="flex flex-col gap-6">
        {navItems.map(({ icon, label, to }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 text-sm hover:text-primary transition-colors cursor-pointer ${
                isActive ? 'text-primary font-semibold' : ''
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
