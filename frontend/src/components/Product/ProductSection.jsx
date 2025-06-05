import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const products = [
  {
    name: "Stylish Jacket Alpha",
    price: 120,
    orginalPrice: 150,
    images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket 1" }],
  },
  {
    name: "Casual Hoodie",
    price: 99,
    orginalPrice: 129,
    images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Casual Hoodie" }],
  },
  {
    name: "Denim Jacket",
    price: 140,
    orginalPrice: 180,
    images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Denim Jacket" }],
  },
  {
    name: "Winter Coat",
    price: 180,
    orginalPrice: 220,
    images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Winter Coat" }],
  }
];

const ProductSection = ({ title }) => (
  <div className='border-2 border-gray-300 p-4 rounded-sm'>
    <h5 className="font-semibold text-lg sm:text-xl mb-4 flex items-center justify-between">
      {title} <FiChevronRight className="text-xl sm:text-2xl" />
    </h5>
    <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
      {products.map((product, index) => (
  <Link
    key={index}
    to={`/product/${encodeURIComponent(product.name)}`}
    state={{ product }}
    className="gap-2 p-2 rounded-sm hover:shadow-md transition w-full"
  >
    <img
      src={product.images[0]?.url}
      alt={product.images[0]?.altText || product.name}
      className="w-full h-40 object-cover rounded"
    />
    <p className="font-semibold text-sm p-1 text-gray-700 truncate" title={product.name}>
      {product.name}
    </p>
    <p className="p-1 text-gray-800 font-medium">
      ₹{product.price}
      <span className="line-through text-gray-500 text-sm ml-2">
        ₹{product.orginalPrice}
      </span>
    </p>
  </Link>
))}

    </div>
  </div>
);

const NewProduct = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductSection title="Discounts for you" />
        <ProductSection title="Recommended for you" />
        <ProductSection title="Suggested Items" />
      </div>
    </div>
  );
};

export default NewProduct;
