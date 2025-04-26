import React from 'react'
import { FaSearch } from 'react-icons/fa'

const CartDrawer = () => {
  return (
    <div className='bg-[#ea2e0e] flex items-center justify-between px-6 py-3'>
      <div className='flex items-center hidden sm:block'>
        <div className='flex items-center text-white text-2xl'>
          NovaStore
        </div>
      </div>
    
      <div className=' flex bg-white items-center rounded-sm overflow-hidden'>
  <input 
    type="text" 
    placeholder='Search for products, brands and more'
    className='w-100 h-10 px-3  text-gray-700 outline-none text-sm'
  />
  <button className='px-3 text-[#ea2e0e] '>
    <FaSearch />
  </button>
      </div>
    
      <div className='text-white font-semibold hidden sm:block'>
        Haiul Sk<span className='text-xs'>▼</span>
      </div>
    </div>
  )
}

export default CartDrawer