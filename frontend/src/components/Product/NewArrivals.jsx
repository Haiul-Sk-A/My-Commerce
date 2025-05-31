import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  const newArrivals = [
    { _id: "1", name: "Stylish Jacket", price: 120, image: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }] },
    { _id: "2", name: "Trendy Sneakers", price: 90, image: [{ url: "https://picsum.photos/500/500?random=2", altText: "Trendy Sneakers" }] },
    { _id: "2", name: "Trendy Sneakers", price: 90, image: [{ url: "https://picsum.photos/500/500?random=3", altText: "Trendy Sneakers" }] },
    { _id: "2", name: "Trendy Sneakers", price: 90, image: [{ url: "https://picsum.photos/500/500?random=4", altText: "Trendy Sneakers" }] },
    { _id: "2", name: "Trendy Sneakers", price: 90, image: [{ url: "https://picsum.photos/500/500?random=5", altText: "Trendy Sneakers" }] },
    { _id: "2", name: "Trendy Sneakers", price: 90, image: [{ url: "https://picsum.photos/500/500?random=6", altText: "Trendy Sneakers" }] },
    { _id: "2", name: "Trendy Sneakers", price: 90, image: [{ url: "https://picsum.photos/500/500?random=6", altText: "Trendy Sneakers" }] },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButton = () => {
    const container = scrollRef.current;
    if (container) {
      setScrollLeft(container.scrollLeft > 0);
      setScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      updateScrollButton();
      return () => container.removeEventListener("scroll", updateScrollButton);
    }
  }, []);

  return (
    <section>
      <div className="container mx-auto text-center relative">
        <h2 className="text-2xl font-semibold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the style straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded text-black shadow border-2 border-transparent cursor-pointer hover:border-black"
            disabled={!scrollLeft}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded text-black shadow border-2 border-transparent cursor-pointer hover:border-black"
            disabled={!scrollRight}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto px-5 pb-5 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]" ref={scrollRef}>
    <div className="flex space-x-6 w-max">
    {newArrivals.map((product) => (
      <div key={product._id} className="w-64 shadow-lg rounded-lg overflow-hidden relative bg-white">
        <img
          src={product.image[0]?.url}
          alt={product.image[0]?.altText || product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 rounded-b-lg">
          <Link to={`/product/${product._id}`} className="block hover:underline">
            <h4 className="font-medium text-lg truncate">{product.name}</h4>
            <p className="mt-1 text-sm font-semibold">${product.price}</p>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
</section>
)};

export default NewArrivals;