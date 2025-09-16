import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw, Settings, Plus } from 'lucide-react';
import DropshipRateCardModal from '@/components/DropshipRateCardModal';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  category: string;
  brand: string;
}

export function DropshipProductsTab() {
  const [showDropshipRateModal, setShowDropshipRateModal] = useState(false);
  
  const { data: dropshipProducts = [], isLoading } = useQuery({
    queryKey: ['/api/dropship-products'],
    queryFn: () => fetch('/api/dropship-products').then(res => res.json())
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5" style={{ color: 'var(--primary-color)' }} />
              Dropship Products
            </CardTitle>
            <CardDescription>
              Manage products fulfilled directly by suppliers without holding inventory
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowDropshipRateModal(true)}
            className="flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            Rate Card
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-8">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p>Loading dropship products...</p>
          </div>
        ) : dropshipProducts.length === 0 ? (
          <div className="text-center py-8">
            <RefreshCw className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium mb-2">No dropship products</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Sell products without inventory by connecting with dropship suppliers
            </p>
            <Button style={{ backgroundColor: 'var(--primary-color)' }}>
              <Plus className="w-4 h-4 mr-2" />
              Add Dropship Product
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full overflow-hidden">
            {dropshipProducts.map((product: any) => (
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
                      <p className="text-xs text-blue-600">Supplier: {product.brand}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
      {showDropshipRateModal && (
        <DropshipRateCardModal 
          open={showDropshipRateModal} 
          onClose={() => setShowDropshipRateModal(false)} 
        />
      )}
    </Card>
  );
}