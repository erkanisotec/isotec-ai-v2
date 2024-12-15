'use client';

import { useState } from 'react';
import { Menu, ChevronLeft } from 'lucide-react';
import { Sidebar } from './components/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r transition-all duration-300 ${
          isCollapsed ? 'w-16' : 'w-[220px]'
        }`}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-4 bg-white border rounded-full p-1.5 hover:bg-gray-100"
        >
          {isCollapsed ? <Menu size={16} /> : <ChevronLeft size={16} />}
        </button>
        <Sidebar isCollapsed={isCollapsed} />
      </div>
      <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-[220px]'}`}>
        {children}
      </main>
    </div>
  );
}