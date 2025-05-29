import React from 'react';
import { Link } from 'react-router-dom';
import{HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser} from "react-icons/hi2"
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <>
    <nav className="fixed top-10 w-full bg-white container mx-auto flex items-center justify-between py-4 px-6 z-50">
        {/*Left - Logo*/}
        <div>
            <Link to="/" className="text-2xl font-medium">
            NovaStore
            </Link>
        </div>

        <div className='hidden md:flex space-x-6'>
            <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                Men
            </Link>

            <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                Women
            </Link>

            <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                Top Wear
            </Link>

            <Link to="/" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                Bottom Wear
            </Link>
        </div>

        {/*Right Icons*/}
        <div className='flex items-center space-x-4'>
            <Link to="/profile">
            <HiOutlineUser className='h-6 w-6 text-gray-700'/>
            </Link>

            <Link to="/cart" className='relative hover:text-black'>
                <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                <span className="absolute top-0 left-5 bg-[#ea2e0e] text-white text-xs rounded-full px-1 py-0.5">4</span>
            </Link>

            <div className='overflow-hidden'>
            <Searchbar/>
            </div>

            <button className="md:hidden">
                <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
            </button>           
        </div>
    </nav>
    </>
  )
}

export default Navbar