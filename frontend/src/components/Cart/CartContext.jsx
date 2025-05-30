import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, handleRemoveFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
