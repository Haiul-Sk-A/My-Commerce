import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const products = [
  {
    name: "Stylish Jacket Alpha",
    price: 120,
    orginalPrice: 150,
    images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket 1" }],
  },
  {
    name: "Winter Hoodie Beta",
    price: 999,
    orginalPrice: 1299,
    images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Winter Hoodie" }],
  },
  // Repeating same items for demonstration
  ...Array(6).fill({
    name: "Trendy Coat Gamma",
    price: 1899,
    orginalPrice: 2499,
    images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Trendy Coat" }],
  }),
];

const RecentView = () => {
  const scrollRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

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
    <div className="p-4">
      <h1 className="text-lg font-bold mb-3">Recent View</h1>

      <div className="relative">
        {/* Optional Scroll Buttons */}
        {scrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 shadow-md px-2 py-1 z-10 text-3xl text-white hover:text-red-700" 
          >
            <FaArrowLeft />
          </button>
        )}

        {scrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 shadow-md px-2 py-1 z-10 text-3xl text-white  hover:text-red-700"
          >
           <FaArrowRight />
          </button>
        )}

        {/* Horizontal Scroll List */}
        <div
          ref={scrollRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          className="flex overflow-x-auto space-x-0 no-scrollbar"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white shadow-sm hover:shadow-md transition rounded-lg overflow-hidden border border-gray-200 text-sm w-[200px] mr-2 last:mr-0"
            >
              <img
                src={product.images[0].url}
                alt={product.images[0].altText}
                className="w-full h-[140px] object-cover"
              />
              <div className="p-2">
                <h2 className="font-medium text-xs truncate">{product.name}</h2>
                <div className="text-sm font-semibold text-green-600">₹{product.price}</div>
                <div className="text-xs text-gray-500 line-through">₹{product.orginalPrice}</div>
                <div className="text-xs text-blue-600 font-medium mt-1">Limited Offer</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentView;