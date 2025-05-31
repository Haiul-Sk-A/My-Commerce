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

  const isItemInCart = (name, color, size) => {
    return cartItems.some(item =>
      item.name === name && item.color === color && item.size === size
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, handleRemoveFromCart,isItemInCart }}>
      {children}
    </CartContext.Provider>
  );
};
