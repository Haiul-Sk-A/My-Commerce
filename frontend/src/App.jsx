import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
// import CartDrawer from './components/Layout/CartDrawer'; 


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>
        {/* <Route path="/Cart" element={<CartDrawer />} /> */}
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
