import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Product/GenderCollectionSection';
import NewArrivals from '../components/Product/NewArrivals';
import Product from '../components/Product/Product';

const Home = () => {
    return (
      <div>
        <Hero />
        <GenderCollectionSection/>
        <NewArrivals/>
        
        {/*Best Selller*/}
        {/* <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2> */}
        {/* <ProductDetails /> */}
        <h2 className='text-3xl text-center font-bold mb-4'>Shop Now</h2>
        <Product/>
      </div>
    );
  };
  

export default Home