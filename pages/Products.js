/ pages/Products.js
import React from 'react';
import Layout from '../components/layout/layout';
import Card from '../components/common/card';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Green Shimmer Sharara Set",
      price: 4999.00,
      image: "/path-to-image"
    },
    // Add more products...
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters */}
          <div className="w-1/4">
            <h2 className="text-lg font-medium mb-4">Filters</h2>
            {/* Add filter components */}
          </div>

          {/* Product Grid */}
          <div className="w-3/4">
            <div className="grid grid-cols-3 gap-8">
              {products.map(product => (
                <Card
                  key={product.id}
                  {...product}
                  onQuickView={() => console.log('Quick view:', product.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
