import React from 'react';
import { Link } from 'react-router-dom';

const allProducts = [
  {
    name: "Denim Jacket",
    price: 140,
    orginalPrice: 180,
    category: "suggested",
    images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Denim Jacket" }],
  },
  {
    name: "Extra Coat",
    price: 220,
    orginalPrice: 270,
    category: "suggested",
    images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Extra Coat" }],
  }
];

const SuggestedProductsPage = () => {
  const suggested = allProducts.filter(p => p.category === "suggested");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Suggested Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {suggested.map((product, index) => (
          <Link
            key={index}
            to={`/product/${encodeURIComponent(product.name)}`}
            state={{ product }}
            className="border rounded shadow p-2 hover:shadow-lg transition"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText}
              className="w-full h-40 object-cover rounded"
            />
            <p className="font-semibold mt-2 truncate">{product.name}</p>
            <p className="text-green-600 font-bold">₹{product.price}</p>
            <p className="line-through text-sm text-gray-500">₹{product.orginalPrice}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProductsPage;