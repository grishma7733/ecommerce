// components/common/button.js
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-rose-600 text-white hover:bg-rose-700',
    secondary: 'border border-rose-600 text-rose-600 hover:bg-rose-50',
    link: 'text-rose-600 hover:text-rose-700 underline'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;