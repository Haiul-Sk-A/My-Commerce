import React from "react";
import { IoMdClose } from "react-icons/io";
import {useNavigate } from "react-router-dom";

const CartDrawer = () => {

    const CartDrawer = ({ drawerOpen }) => {
        const navigate = useNavigate();
      
        const handleClose = () => {
          navigate(-1);
        };
  return (
    <div className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform flex flex-col z-50 transition-transform duration-300 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-xl font-semibold">Your Cart</h4>
        <button onClick={handleClose} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200">
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Checkout Page Content */}
      <div className="overflow-y-auto p-6 flex-1 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left - Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
            <div className="border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold">Your Cart(12)</h2>
            </div>

            {/* Delivery Address */}
            <div className="bg-gray-50 p-4 rounded-xl mb-6 flex justify-between items-center">
              <div>
                <p className="font-semibold">Deliver to: Haiul Sk, 742405</p>
                <p className="text-gray-500 text-sm">
                  Vill-Rangamati Chandpara, P.O - Jadupur, P.S- Berhampore
                </p>
              </div>
              <button className="text-blue-500 font-semibold">Change</button>
            </div>

            {/* Product Item - 1 */}
            <div className="flex items-start mb-6">
              <img
                src="https://via.placeholder.com/60x120"
                alt="Screen Cleaner"
                className="w-16 h-20 object-contain"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-700">
                  NIBAR Screen Cleaner, Laptop Screen Cleaner Spray
                </h3>
                <p className="text-red-500 font-semibold mt-1">Out Of Stock</p>
                <div className="flex mt-2 gap-4 text-sm text-blue-600 font-semibold">
                  <button>SAVE FOR LATER</button>
                  <button>REMOVE</button>
                </div>
              </div>
            </div>

            {/* Product Item - 2 */}
            <div className="flex items-start mb-6">
              <img
                src="https://via.placeholder.com/60x120"
                alt="Screen Cleaner Kit"
                className="w-16 h-20 object-contain"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-700">
                  DARIX Screen Cleaning Kit for Computers, Laptops
                </h3>
                <p className="text-red-500 font-semibold mt-1">Out Of Stock</p>
                <div className="flex mt-2 gap-4 text-sm text-blue-600 font-semibold">
                  <button>SAVE FOR LATER</button>
                  <button>REMOVE</button>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full">
                PLACE ORDER
              </button>
            </div>
          </div>

          {/* Right - Price Details */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">PRICE DETAILS</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Price (9 items)</span>
                <span>₹33,682</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>- ₹15,766</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Buy more & save more</span>
                <span>- ₹250</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Coupons for you</span>
                <span>- ₹32</span>
              </div>
              <div className="flex justify-between">
                <span>Secured Packaging Fee</span>
                <span>₹59</span>
              </div>
              <div className="flex justify-between">
                <span>Protect Promise Fee</span>
                <span>₹9</span>
              </div>
              <div className="flex justify-between line-through text-gray-400">
                <span>Delivery Charges</span>
                <span>₹409</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>₹129</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total Amount</span>
              <span>₹17,831</span>
            </div>

            <p className="text-green-600 text-center text-sm mt-4 font-semibold">
              You will save ₹15,851 on this order
            </p>

            <div className="flex items-center justify-center mt-6 text-xs text-gray-500">
              <svg
                className="w-5 h-5 mr-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
