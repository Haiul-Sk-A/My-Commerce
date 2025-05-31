import React from 'react';
import { Link } from 'react-router-dom';
import womenscollection from '../../assets/womenscollection.webp';
import menscollection from '../../assets/menscollection.webp'

const GenderCollectionSection = () => {
  return (
   <section className="py-8 px-4 sm:px-6 lg:px-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Women's Collection */}
    <div className="relative aspect-[2/1] rounded-lg overflow-hidden shadow-md">
      <img
        src={womenscollection}
        alt="Women's collection"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 p-3 shadow rounded">
        <h2 className="text-base font-medium text-gray-900">Women's Collection</h2>
        <Link
          to="/collections/all?gender=women"
          className="text-sm text-blue-600  hover:text-blue-800"
        >
          Shop Now
        </Link>
      </div>
    </div>

    {/* Men's Collection */}
    <div className="relative aspect-[2/1] rounded-lg overflow-hidden shadow-md">
      <img
        src={menscollection}
        alt="Men's collection"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 p-3 shadow rounded">
        <h2 className="text-base font-medium text-gray-900">Men's Collection</h2>
        <Link
          to="/collections/all?gender=men"
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Shop Now
        </Link>
      </div>
    </div>
  </div>
</section>


)}

export default GenderCollectionSection;