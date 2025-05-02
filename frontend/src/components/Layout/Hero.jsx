import React from 'react';
import heroImg from '../../assets/NovaStore_hero.webp';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative">
  <img 
    src={heroImg}
    alt="NovaStore"
    className="mt-[112px] w-full h-[584px] md:h-[780px] object-cover"
  />

  <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center z-10">
    <div className="text-center text-white p-6">
      <h1 className="text-4xl md:text-9xl font-bold tracking-tight uppercase mb-4">
        Vacation <br /> Ready
      </h1>
      <p className="text-sm tracking-tighter md:text-lg mb-6">
        Explore our vacation-ready outfits shipping
      </p>
      <Link to="#" className="bg-white text-black text-sm px-4 py-2 font-semibold uppercase">
        Shop Now
      </Link>
    </div>
  </div>
</section>

  )
}

export default Hero