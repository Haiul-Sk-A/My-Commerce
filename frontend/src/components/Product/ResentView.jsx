import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ResentView = () => {
  const scrollRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  const newArrivals = [
    { _id: "1", name: "Stylish Jacket", price: 120, image: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }] },
    { _id: "2", name: "Trendy Sneakers", price: 90, image: [{ url: "https://picsum.photos/500/500?random=2", altText: "Trendy Sneakers" }] },
    { _id: "3", name: "Cool Watch", price: 150, image: [{ url: "https://picsum.photos/500/500?random=3", altText: "Cool Watch" }] },
    { _id: "4", name: "Modern Hat", price: 60, image: [{ url: "https://picsum.photos/500/500?random=4", altText: "Modern Hat" }] },
    { _id: "5", name: "Sleek Backpack", price: 110, image: [{ url: "https://picsum.photos/500/500?random=5", altText: "Sleek Backpack" }] },
    { _id: "6", name: "Elegant Sunglasses", price: 80, image: [{ url: "https://picsum.photos/500/500?random=6", altText: "Elegant Sunglasses" }] },
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
    <section className="py-12">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Recent View</h2>

        <div className="relative w-full">
          {/* Left button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed z-10"
            disabled={!scrollLeft}
          >
            <FiChevronLeft className="text-2xl text-gray-700" />
          </button>

          {/* Right button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed z-10"
            disabled={!scrollRight}
          >
            <FiChevronRight className="text-2xl text-gray-700" />
          </button>

          {/* Product list */}
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto scroll-smooth scrollbar-hide"
          >
            <div className="flex space-x-6 w-max px-2">
              {newArrivals.map((product) => (
                <div
                  key={product._id}
                  className="w-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
                >
                  <div className="relative group">
                    <img
                      src={product.image[0]?.url}
                      alt={product.image[0]?.altText || product.name}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                      onLoad={updateScrollButton}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-transparent to-transparent text-white p-4">
                      <Link to={`/product/${product._id}`} className="block hover:underline">
                        <h4 className="font-semibold text-lg truncate">{product.name}</h4>
                        <p className="mt-1 text-sm font-semibold">${product.price}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResentView;
