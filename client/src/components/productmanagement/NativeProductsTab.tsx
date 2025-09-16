import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Package } from 'lucide-react';

export function NativeProductsTab() {
  const { data: nativeProducts = [], isLoading } = useQuery({
    queryKey: ['/api/products'],
    queryFn: () => fetch('/api/products?type=native').then(res => res.json())
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
          Native Products
        </CardTitle>
        <CardDescription>
          Products hosted and managed directly on your platform with full inventory control
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <Package className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-medium mb-2">Native Products</h3>
          <p className="text-gray-600 dark:text-gray-400">
            All your standard products are managed through the existing product management system
          </p>
        </div>
      </CardContent>
    </Card>
  );
}