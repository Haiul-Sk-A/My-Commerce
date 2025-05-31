import React from 'react';

const products = [
    {
    name: "Stylish Jacket Alpha",
    price: 120,
    orginalPrice: 150,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    name: "Casual Hoodie",
    price: 99,
    orginalPrice: 129,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Casual Hoodie",
      },
    ],
  },
  {
    name: "Denim Jacket",
    price: 140,
    orginalPrice: 180,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Denim Jacket",
      },
    ],
  },
  {
    name: "Winter Coat",
    price: 180,
    orginalPrice: 220,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Winter Coat",
      },
    ],
  },
  {
    name: "Rain Jacket",
    price: 110,
    orginalPrice: 130,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Rain Jacket",
      },
    ],
  },
  {
    name: "Puffer Jacket",
    price: 150,
    orginalPrice: 190,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Puffer Jacket",
      },
    ],
  },
  {
    name: "Stylish Jacket Alpha",
    price: 120,
    orginalPrice: 150,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    name: "Casual Hoodie",
    price: 99,
    orginalPrice: 129,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Casual Hoodie",
      },
    ],
  },
  {
    name: "Denim Jacket",
    price: 140,
    orginalPrice: 180,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Denim Jacket",
      },
    ],
  },
  {
    name: "Winter Coat",
    price: 180,
    orginalPrice: 220,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Winter Coat",
      },
    ],
  },
  {
    name: "Rain Jacket",
    price: 110,
    orginalPrice: 130,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Rain Jacket",
      },
    ],
  },
  {
    name: "Puffer Jacket",
    price: 150,
    orginalPrice: 190,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Puffer Jacket",
      },
    ],
  },
];

const NewProduct = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 p-2 rounded-sm hover:shadow-md transition w-full"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-40 object-cover rounded"
            />
            <p
              className="font-semibold text-sm p-1 text-gray-700 truncate"
              title={product.name}
            >
              {product.name}
            </p>
            <p className="p-1 text-gray-800 font-medium">
              ₹{product.price}
              <span className="line-through text-gray-500 text-sm ml-2">
                ₹{product.orginalPrice}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProduct;
