import React from 'react';
import { Link } from 'react-router-dom';
import womenscollection from '../../assets/womenscollection.webp';
import menscollection from '../../assets/menscollection.webp'

const GenderCollectionSection = () => {
  return (
    <section className="py-8 px-40">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Women's Collection */}
    <div className="relative h-[300px]">
      {/* Background Image */}
      <img
        src={womenscollection}
        alt="Women's collection"
        className="w-full h-full object-cover"
      />

      {/* Overlay Box */}
      <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 p-2  shadow-md w-[148px]">
        <h2 className="text-sm text-gray-900">Women's Collection</h2>
        <Link
          to="/collections/all?gender=women"
          className="text-sm text-gray-900 underline hover:text-gray-700"
        >
          Shop Now
        </Link>
      </div>
    </div>

    {/* Men's Collection */}
    <div className="relative h-[300px]">
      {/* Background Image */}
      <img
        src={menscollection}
        alt="Men's collection"
        className="w-full h-full object-cover"
      />

      {/* Overlay Box */}
      <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 p-2  shadow-md w-[148px]">
        <h2 className="text-sm text-gray-900">Men's Collection</h2>
        <Link
          to="/collections/all?gender=men"
          className="text-sm text-gray-900 underline hover:text-gray-700"
        >
          Shop Now
        </Link>
      </div>
    </div>
  </div>
</section>
)}

export default GenderCollectionSection;