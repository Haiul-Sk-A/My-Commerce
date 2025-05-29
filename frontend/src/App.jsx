import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import CartDrawer from './components/Layout/CartDrawer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home onAddToCart={handleAddToCart} />} />
        </Route>
        <Route path="/Cart" element={<CartDrawer cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;