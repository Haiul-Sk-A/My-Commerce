import React, { useState } from 'react';
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setOpen] = useState(false);

  const handleSearchToggle = () => {
    setOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "fixed inset-0 bg-white h-15 z-50" : "relative w-auto"}`}>
      {isOpen ? (
        <form
          className="relative flex items-center justify-center w-full"
          onSubmit={(e) => {
            e.preventDefault(); 
            console.log("Search term:", searchTerm); 
            handleSearchToggle();
          }}
        >
          <div className="relative w-3/4 max-w-xl">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleInputChange}
              className="bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-orange-500 outline-2 outline-orange-300 w-full placeholder-gray-500 "
            />
            <button
              type="submit"
              className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-black"
            >
              <HiOutlineMagnifyingGlass className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={handleSearchToggle}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              aria-label="Close search"
            >
              <HiMiniXMark className="h-6 w-6" />
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={handleSearchToggle}
          className="text-gray-800 hover:text-black"
          aria-label="Open search"
        >
          <HiOutlineMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
