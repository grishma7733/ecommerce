// components/common/card.js
import React from 'react';

const Card = ({ image, title, price, onQuickView }) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-[400px] object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={onQuickView}
            className="w-full bg-white text-gray-900 py-2 rounded"
          >
            Quick view
          </button>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-gray-900 font-medium">{title}</h3>
        <p className="text-gray-600">₹ {price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Card;