import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { FaInstagram } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

const Topbar = () => {
  return (
    <div className="fixed top-0 w-full bg-[#ea2e0e] text-white z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-1">
        <div className="hidden md:flex items-center space-x-5">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <ImTwitter className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping</span>
        </div>

        <div className="hidden md:block text-sm">
          <a href="tel:+917478173038" className="hover:text-gray-500">
            +91 7478173038
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topbar