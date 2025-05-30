import React,{useState,useContext} from 'react'
import { FaSearch } from 'react-icons/fa'
import { CartContext } from '../Cart/CartContext';

const CartDrawer = () => {

  const { cartItems, handleRemoveFromCart } = useContext(CartContext);

//   const [cartItem, setCartItems] = useState( [])

//   const handleDelete = (indexToDelete) => {
//   setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToDelete));
// };
  
  return(
  <div className='bg-blue-100 min-h-screen'>
  <div className='fixed w-full top-0 bg-[#ea2e0e] flex items-center justify-between px-6 py-3'>
    <div className='flex items-center hidden sm:block'>
      <div className='flex items-center text-white text-2xl'>
        NovaStore
      </div>
    </div>

    <div className=' flex bg-white items-center rounded-sm overflow-hidden'>
      <input type="text" placeholder='Search for products, brands and more'className='w-100 h-10 px-3  text-gray-700 outline-none text-sm'/>
      <button className='px-3 text-[#ea2e0e] cursor-pointer'><FaSearch /></button>
    </div>

    <div className='text-white font-semibold hidden sm:block'>
      Haiul Sk<span className='text-xs cursor-pointer'>▼</span>
    </div>
  </div>

  <div className='pt-20 px-6'>
    {/* <div className='hidden md:block w-2/3 flex flex-col bg-white rounded-md shadow mb-2'>
      <div className='py-4'>
        <h1 className='text-2xl font-bold text-gray-800 pl-5'>YourCart</h1>
      </div>
    </div> */}

    {/*Delivery Info*/}
    <div className='md:w-2/3 flex justify-between bg-white rounded-md shadow p-4'>
       <p className='text-sm '>Delivery to: 
        <span className='font-bold'>Haiui Sk,742405</span>
          <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 ml-2 rounded">HOME</span>
          <span className='text-xs mt-1 block rounded '> Vill-Rangamati Chandpara, P.O-Jadupur P.S-Berhampore</span>
       </p>
      <button className='text-blue-500 font-medium text-sm cursor-pointer'>Change</button>
    </div>
    
<div className="md:w-2/3 bg-white rounded-md mt-2 shadow p-4 h-[530px] flex flex-col relative">
  <div className="flex-1 overflow-y-auto pr-2">
    {cartItems.length === 0 ? (
      <p className="text-gray-600 text-center p-4">Your cart is empty</p>
    ) : (
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex px-5 border-b pb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />
            <div className="flex flex-1 justify-between items-center ml-4">
              <div>
                <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <p className="font-medium">₹ {item.price} × {item.quantity}</p>
              </div>
              <button onClick={() => handleRemoveFromCart(index)} className="text-blue-500 font-medium text-sm cursor-pointer">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Sticky footer inside cart box */}
  <div className="border-t border-gray-200 shadow-inner h-16 flex justify-end items-center px-4 mt-4">
    <button className="text-white bg-[#fb641b] border border-black h-9 px-6 rounded cursor-pointer">
      PLACE ORDER
    </button>
  </div>
</div>
</div>


  <div className='absolute top-30 left-275'>

  <div className=" fixed w-100 mx-auto p-6 bg-white shadow-lg">
<h2 className="text-xl font-semibold mb-4 border-b">PRICE DETAILS</h2>

<div className="space-y-3 text-sm text-gray-700">
  <div className="flex justify-between">
    <span>Price (8 items)</span>
    <span>₹29,683</span>
  </div>

  <div className="flex justify-between">
    <span>Discount</span>
    <span>- ₹12,564</span>
  </div>

  <div className="flex justify-between">
    <span>Buy more &amp; save more</span>
    <span>- ₹119</span>
  </div>

  <div className="flex justify-between">
    <span>Coupons for you</span>
    <span>- ₹32</span>
  </div>

  <div className="flex justify-between">
    <span>Secured Packaging Fee</span>
    <span>₹59</span>
  </div>

  <div className="flex justify-between">
    <span className="flex items-center gap-1">
      Protect Promise Fee
      <span className="text-gray-400 text-xs cursor-pointer">ⓘ</span>
    </span>
    <span>₹9</span>
  </div>

  <div className="flex justify-between">
    <span>Delivery Charges</span>
    <div className="flex flex-col items-end">
      <span className="line-through text-gray-400 text-xs">₹369</span>
      <span>₹129</span>
    </div>
  </div>

  <div className="border-t flex justify-between font-semibold text-lg">
    <span>Total Amount</span>
    <span>₹17,165</span>
  </div>

  <div className="border-t p-2 mt-4">
    <p className='font-medium'>You will save ₹12,518 on this order</p>
  </div>
</div>
</div>
  </div>
</div>
)}

export default CartDrawer