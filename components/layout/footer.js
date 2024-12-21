/ components/layout/footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">Our Story</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-600 hover:text-gray-900">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-gray-900">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pinterest</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get special offers and updates</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>© 2024 Ambraee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;