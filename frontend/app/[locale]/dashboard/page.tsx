'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '../../../contexts/AuthContext';
import { Card } from '../../../components/ui/Card';
import { CubeIcon, ShoppingBagIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const t = useTranslations('dashboard');
  const { user, loading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    if (!loading && !user) {
      router.push(`/${locale}/login`);
    }
  }, [user, loading, router, locale]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const stats = [
    {
      title: t('totalProducts'),
      value: '234',
      icon: CubeIcon,
      color: 'bg-blue-500',
    },
    {
      title: t('totalOrders'),
      value: '89',
      icon: ShoppingBagIcon,
      color: 'bg-green-500',
    },
    {
      title: t('pendingOrders'),
      value: '12',
      icon: ClockIcon,
      color: 'bg-yellow-500',
    },
    {
      title: t('revenue'),
      value: '$45,890',
      icon: CurrencyDollarIcon,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('title')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Orders">
          <div className="space-y-4">
            <p className="text-gray-600">No recent orders</p>
          </div>
        </Card>

        <Card title="Low Stock Products">
          <div className="space-y-4">
            <p className="text-gray-600">All products are well stocked</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
