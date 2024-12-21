// components/layout/header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Heart, ShoppingBag, Truck } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="bg-rose-800 text-white py-2 text-center">
        <p>SALE - UPTO 80% OFF + EXTRA 10% OFF ON PREPAID ORDERS</p>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="w-1/4">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 bg-gray-100 rounded-md"
            />
          </div>
          
          <Link to="/" className="text-2xl font-serif">AMBRAEE</Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/account"><User /></Link>
            <Link to="/wishlist"><Heart /></Link>
            <Link to="/cart"><ShoppingBag /></Link>
            <Link to="/tracking"><Truck /></Link>
          </div>
        </div>
        
        <nav className="mt-6">
          <ul className="flex items-center justify-center space-x-8">
            <li><Link to="/new-arrivals" className="hover:text-rose-600">NEW ARRIVALS</Link></li>
            <li><Link to="/ethnic-wear" className="hover:text-rose-600">ETHNIC WEAR</Link></li>
            <li><Link to="/best-sellers" className="hover:text-rose-600">BEST SELLERS</Link></li>
            <li><Link to="/dresses" className="hover:text-rose-600">DRESSES</Link></li>
            <li><Link to="/coords" className="hover:text-rose-600">CO-ORDS & JUMPSUITS</Link></li>
            <li><Link to="/tops" className="hover:text-rose-600">TOPS & SHIRTS</Link></li>
            <li><Link to="/under-1499" className="hover:text-rose-600">UNDER 1499 STORE</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;