'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types';

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        console.error('Products fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-12">Loading products...</div>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-lg transition">
          {product.image && (
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          )}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-slate-300 text-sm mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-400">${product.price}</span>
              <span className="text-sm text-slate-400">Stock: {product.stock}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
