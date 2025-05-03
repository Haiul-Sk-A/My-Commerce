import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const products = [
  {
    _id: "1",
    name: "Stylish Jacket",
    price: 120,
    image: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "2",
    name: "Trendy Sneakers",
    price: 90,
    image: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Trendy Sneakers",
      },
    ],
  },
];

const NewArrivals = () => {
  return (
    <section>
        <div className="container mx-auto text-center  relative">
          <h2 className="text-2xl font-semibold mb-4">Explore New Arrivals</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover the style straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
          </p>

          <div className="absolute right-4 bottom-[-30px] flex space-x-2">
            <button className="p-2 rounded border-none bg-white text-black shadow">
              <FiChevronLeft className="text-2xl" />
            </button>
            <button className="p-2 rounded border-none bg-white text-black shadow">
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="container mx-auto flex space-x-6 relative px-5 pb-5">
          {products.map((product) => (
            <div key={product._id} className="w-64 shadow-lg rounded-lg overflow-hidden relative bg-white">
              <img
                src={product.image[0]?.url}
                alt={product.image[0]?.altText || product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent bg-blue text-white p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`} className="block hover:underline">
                  <h4 className="font-medium text-lg truncate">{product.name}</h4>
                  <p className="mt-1 text-sm font-semibold">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>

    </section>
  );
};

export default NewArrivals;
