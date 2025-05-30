import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Cart/CartContext';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import CartDrawer from './components/Layout/CartDrawer';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/Cart' element={<CartDrawer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
