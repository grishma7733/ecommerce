// pages/Home.js
import React from 'react';
import Layout from '../components/layout/layout';
import Card from '../components/common/card';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Green Shimmer Sharara Set",
      price: 4999.00,
      image: "/path-to-image"
    },
    {
      id: 2,
      title: "Scarlet Red Ruffle Saree",
      price: 4999.00,
      image: "/path-to-image"
    },
    // Add more products...
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-[600px] bg-beige">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-serif mb-6">
              Wedding Carnival Sale
            </h1>
            <p className="text-xl mb-8">Up to 80% Off</p>
            <p className="text-lg mb-8">Get Extra 10% Off on Pre-paid Orders</p>
            <button className="bg-rose-600 text-white px-8 py-3 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-serif mb-8">Featured Collection</h2>
        <div className="grid grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <Card
              key={product.id}
              {...product}
              onQuickView={() => console.log('Quick view:', product.id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;