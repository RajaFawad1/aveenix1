export interface Product {
  id: string;
  name: string;
  description?: string;
  price: string;
  originalPrice?: string;
  costPrice?: string;
  category: string;
  brand: string;
  imageUrl: string;
  approvalStatus: 'preview' | 'pricing' | 'pending' | 'approved' | 'rejected' | 'published';
  sourcePlatform: string;
  productType: string;
  externalId: string;
  affiliateUrl: string;
  approvedBy?: number;
  approvedAt?: string;
  rejectionReason?: string;
  rejectionDate?: string;
  createdAt: string;
  lastSyncedAt?: string;
  // Pricing & Inventory
  discountPercentage?: number;
  stockQuantity?: number;
  isInStock?: boolean;
  // Rating & Reviews
  rating?: number;
  reviewCount?: number;
  // Additional Product Identity Fields
  productCode?: string;
  sku?: string;
  barcode?: string;
  reference?: string;
  manufacturer?: string;
  productTags?: string[];
  seoField?: string;
  notes?: string;
  // Enhanced WooCommerce fields
  platformSpecificData?: {
    woocommerce?: {
      slug?: string;
      type?: string;
      virtual?: boolean;
      downloadable?: boolean;
      manage_stock?: boolean;
      tax_status?: string;
      tax_class?: string;
      backorders?: string;
      backorders_allowed?: boolean;
      backordered?: boolean;
      sold_individually?: boolean;
      shipping_required?: boolean;
      shipping_taxable?: boolean;
      shipping_class?: string;
      reviews_allowed?: boolean;
      upsell_ids?: number[];
      cross_sell_ids?: number[];
      parent_id?: number;
      purchase_note?: string;
      default_attributes?: any[];
      variations?: number[];
      grouped_products?: number[];
      button_text?: string;
      product_url?: string;
      image_gallery?: Array<{
        id: number;
        src: string;
        alt: string;
        name: string;
      }>;
      attributes?: Array<{
        id: number;
        name: string;
        options: string[];
        visible: boolean;
        variation: boolean;
        position: number;
      }>;
      dimensions?: {
        length: string;
        width: string;
        height: string;
      };
      weight?: string;
      meta_data?: Record<string, any>;
      short_description?: string;
    };
  };
}

export interface WooCommerceProduct {
  id: number;
  name: string;
  price: string;
  categories: { name: string }[];
  images: { src: string }[];
  stock_status: string;
  type: string;
}

export interface AutomationRules {
  autoPricing: {
    enabled: boolean;
    markupPercentage: number;
  };
  autoImport: {
    enabled: boolean;
    autoSelectNew: boolean;
    batchSize: number;
    interval: number; // minutes
  };
  autoApprove: {
    enabled: boolean;
    priceThreshold: number;
    ratingThreshold: number;
    categories: string[];
    excludeKeywords: string[];
  };
  autoPublish: {
    enabled: boolean;
    immediately: boolean;
    scheduleHours: number;
  };
  autoReject: {
    enabled: boolean;
    maxPrice: number;
    minRating: number;
    bannedKeywords: string[];
  };
}