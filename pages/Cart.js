// pages/Cart.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.js';
import Layout from '../components/layout/layout.js';
import Button from '../components/common/button.js';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      const response = await fetch('/api/get-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.userId }),
        credentials: 'include'
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setCartItems(data.cart.productsInCart);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await fetch('/api/update-quantity', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.userId,
          productId,
          productQty: quantity
        }),
        credentials: 'include'
      });

      if (!response.ok) throw new Error('Failed to update quantity');
      fetchCart();
    } catch (err) {
      setError(err.message);
    }
  };

  const removeItem = async (productId) => {
    try {
      const response = await fetch('/api/delete-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.userId,
          productId
        }),
        credentials: 'include'
      });

      if (!response.ok) throw new Error('Failed to remove item');
      fetchCart();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium mb-8">Shopping Cart</h1>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded mb-4">
            {error}
          </div>
        )}

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Button variant="primary" onClick={() => navigate('/products')}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div key={item.productId} className="flex items-center gap-4 p-4 border-b">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                        className="p-1 border rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="p-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.productId)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium mb-4">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹99</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 99}</span>
                    </div>
                  </div>
                </div>
                <Button variant="primary" className="w-full mt-4">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;