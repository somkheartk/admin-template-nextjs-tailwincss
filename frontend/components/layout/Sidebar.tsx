'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import {
  HomeIcon,
  CubeIcon,
  ShoppingBagIcon,
  UsersIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  locale: string;
}

export function Sidebar({ locale }: SidebarProps) {
  const t = useTranslations('common');
  const pathname = usePathname();
  const { hasRole } = useAuth();

  const navigation = [
    { name: t('dashboard'), href: `/${locale}/dashboard`, icon: HomeIcon, show: true },
    { name: t('products'), href: `/${locale}/products`, icon: CubeIcon, show: true },
    { name: t('orders'), href: `/${locale}/orders`, icon: ShoppingBagIcon, show: true },
    { name: t('users'), href: `/${locale}/users`, icon: UsersIcon, show: hasRole(['admin']) },
    { name: t('settings'), href: `/${locale}/settings`, icon: Cog6ToothIcon, show: true },
  ];

  return (
    <div className="flex flex-col w-64 bg-gray-900 h-screen sticky top-0">
      <div className="flex items-center justify-center h-16 bg-gray-800">
        <h1 className="text-white text-xl font-bold">WMS Admin</h1>
      </div>
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        {navigation.filter(item => item.show).map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'flex items-center px-4 py-3 mb-2 rounded-lg transition-colors',
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              )}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
