'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '../../../components/ui/Card';

export default function SettingsPage() {
  const t = useTranslations('common');

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('settings')}</h1>
      
      <Card>
        <p className="text-gray-600">Settings page - Configure your preferences here</p>
      </Card>
    </div>
  );
}
