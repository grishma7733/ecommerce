import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [seller, setSeller] = useState(null);

  const loginUser = (userData) => {
    setUser(userData);
  };

  const loginSeller = (sellerData) => {
    setSeller(sellerData);
  };

  const logout = async (isSeller = false) => {
    try {
      const endpoint = isSeller ? '/api/seller/logout' : '/api/logout';
      const response = await fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(isSeller ? { sellerId: seller?.sellerId } : {})
      });

      if (response.ok) {
        isSeller ? setSeller(null) : setUser(null);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, seller, loginUser, loginSeller, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
