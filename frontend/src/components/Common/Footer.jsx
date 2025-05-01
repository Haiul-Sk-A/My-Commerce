import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='border-t py-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-8'>
            <div>
                <h3 className='text-lg text-gray-800 mv-4'>Newsletter</h3>
                <p className='text-gray-500 mb-4'>Be the first here about new products, events, and online offers</p>
                <p>Sign up get 10% off your first order</p>

                <form className='flex'>
                    <input type="email" placeholder='Enter your email' className="p-3 w-full text-sm border-t border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required/>
                    <button type='submit' className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800">Submit</button>
                </form>
            </div>

            <div>
                <h3 className='text-lg text-gray-800 mb-4 '>Shop</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Men's to top Wear</Link>
                    </li>

                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Women's top wear</Link>
                    </li>

                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Men's Bottom Wear</Link>
                    </li>

                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Women's Bottom Wear</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='text-lg text-gray-800 mb-4 '>Support</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Contect us</Link>
                    </li>

                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">About Us</Link>
                    </li>

                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">FAQs</Link>
                    </li>

                    <li>
                        <Link to="#" className="hover:text-gray-500 transition-colors">Features</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Follow US</h3>
                <div className='flex items-center space-x-4 mb-6'>
                    <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500 '><TbBrandMeta className='h-5 w-5'/></a>
                    <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500 '><FaInstagram  className='h-5 w-5'/></a>
                    <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500 '><LuTwitter className='h-5 w-5'/></a>
                    <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500 '><FaPhoneAlt className='h-5 w-5'/></a>
                </div>

                <div className="text-lg text-gray-800">
                  <p>Call Us</p>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <FaPhoneAlt className="h-4 w-5" />
                    <span>7478173038</span>
                  </div>
                </div>
            </div>
        </div>

        <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
            <p className='text-gray-500 text-sm -tracking-tighter text-center'>©2025,Complete.All Right Reversed.</p>
        </div>
    </footer>
  )
}

export default Footer