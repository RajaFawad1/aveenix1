import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ExternalLink, Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  category: string;
  commissionRate?: string;
}

// Affiliate Products Tab Component
export function AffiliateProductsTab() {
  const { data: affiliateProducts = [], isLoading } = useQuery({
    queryKey: ['/api/affiliate-products'],
    queryFn: () => fetch('/api/affiliate-products').then(res => res.json())
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLink className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
          Affiliate Products
        </CardTitle>
        <CardDescription>
          Manage products that redirect customers to external affiliate links for commissions
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-8">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p>Loading affiliate products...</p>
          </div>
        ) : affiliateProducts.length === 0 ? (
          <div className="text-center py-8">
            <ExternalLink className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium mb-2">No affiliate products</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Start earning commissions by adding affiliate products from external platforms
            </p>
            <Button style={{ backgroundColor: 'var(--primary-color)' }}>
              <Plus className="w-4 h-4 mr-2" />
              Add Affiliate Product
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full overflow-hidden">
            {affiliateProducts.map((product: any) => (
              <Card key={product.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-1 truncate">{product.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{product.category}</p>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--primary-color)' }}>${product.price}</p>
                      <p className="text-xs text-green-600">Commission: {product.commissionRate || '5'}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}