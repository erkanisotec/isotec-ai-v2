'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users', href: '/dashboard/users' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export function Sidebar({ isCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="py-4 flex flex-col h-full">
      <div className="px-4 mb-6">
        <h1 className={`font-bold transition-all duration-300 ${
          isCollapsed ? 'text-sm' : 'text-xl'
        }`}>
          {isCollapsed ? 'AI' : 'AI Isotec'}
        </h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  } ${isCollapsed ? 'justify-center' : 'space-x-3'}`}
                >
                  <Icon size={20} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto px-4">
        <button
          className={`flex items-center text-gray-600 hover:text-red-600 text-sm ${
            isCollapsed ? 'justify-center' : 'space-x-3'
          }`}
        >
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}