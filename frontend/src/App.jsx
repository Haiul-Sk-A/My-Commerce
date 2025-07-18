import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Cart/CartContext';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import CartDrawer from './components/Layout/CartDrawer';
import Sigin from './components/Common/Sigin';
import ProductDetails from './components/Product/ProductDetails';
import Payment from './components/Common/Payment';
import SuggestedProductsPage from './components/Product/SuggestedProductsPage';
import VerifyOTP from './components/Common/VerifyOTP';
import SignUp from './components/Common/SignUp';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/product/:name' element={<ProductDetails />} />
          <Route path='/cart' element={<CartDrawer />} />
          <Route path='/signIn' element={<Sigin />} />
          <Route path='/payment' element={<Payment />} />
          <Route path="/suggested" element={<SuggestedProductsPage />} />
          <Route path="/verify" element={<VerifyOTP/>} />
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
