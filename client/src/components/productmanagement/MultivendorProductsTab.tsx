import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

export function MultivendorProductsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
          Multi-vendor Products
        </CardTitle>
        <CardDescription>
          Products from multiple vendors managed through the marketplace platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <Settings className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-medium mb-2">Multi-vendor System</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Advanced vendor management system for marketplace operations
          </p>
          <Button variant="outline" style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}>
            Coming Soon
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}