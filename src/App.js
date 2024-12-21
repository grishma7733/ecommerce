import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import layout components
import Layout from './components/layout/layout';
import Footer from './components/layout/footer';
import Header from './components/layout/header';

// Import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';

// Import route components
import AdminAuth from './routes/adminauth';
import Auth from './routes/auth';
import CartRoute from './routes/cart';
import Complaints from './routes/complaints';
import Coupon from './routes/coupon';

// Import contexts
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />

              {/* Route Components */}
              <Route path="/admin/*" element={<AdminAuth />} />
              <Route path="/auth/*" element={<Auth />} />
              <Route path="/cart-route/*" element={<CartRoute />} /> {/* Renamed to avoid conflict with Cart page */}
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/coupon" element={<Coupon />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;