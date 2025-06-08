import React, { useState, useContext } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CartContext } from '../Cart/CartContext'; 

const Payment = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null); 
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const { cartItems } = useContext(CartContext); 

  const address = [
    {
      name: "Haiul Sk",
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      pinCode: "62704",
      country: "USA"
    },
    {
      name: "Haiul Sk",
      street: "456 Elm St",
      city: "Springfield",
      state: "IL",
      pinCode: "62705",
      country: "USA"
    }
  ];

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen px-8 py-4 bg-gray-100 space-y-4">
      {/* Login Box */}
      <div className="h-[60px] w-250 bg-white rounded-sm p-3">
        <h1 className="text-xl">Login</h1>
        <p>
          {address[0].name} <span className="ml-2 text-gray-600">+91 7478173038</span>
        </p>
      </div>

      {/* Delivery Header */}
      <div
        className="w-250 bg-blue-700 p-3 rounded-sm cursor-pointer flex items-center justify-between"
        onClick={() => setShowDetails(!showDetails)}
      >
        <h1 className="text-xl text-white flex items-center gap-2">Delivery</h1>
        <IoIosArrowDown
          size={24}
          className={`text-white transform transition-transform duration-300 ${
            showDetails ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Delivery Details */}
      {showDetails && (
        <div className="w-250 bg-white rounded shadow-md p-3 space-y-3">
          {address.map((addr, index) => (
            <div key={index} className="border-b pb-3 mb-3">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="deliveryAddress"
                  checked={selectedAddressIndex === index}
                  onChange={() => setSelectedAddressIndex(index)}
                />
                <h6 className="text-base font-medium flex items-center gap-2 flex-wrap">
                  {addr.name}
                  <span className="text-sm bg-gray-400 px-2 py-0.5 rounded-sm">Home</span>
                  <span>+91 7478173038</span>
                </h6>
              </div>
              <p className="text-sm text-gray-600">
                {addr.street}, {addr.city}, {addr.state}, {addr.pinCode}
              </p>

              {selectedAddressIndex === index && (
                <button
                  className="h-10 w-28 text-white bg-orange-500 rounded hover:bg-orange-600"
                  onClick={() => setShowOrderSummary(true)}
                >
                 Delivery Here
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Order Summary Header */}
      <div
        className="w-250 bg-blue-700 p-3 rounded-sm cursor-pointer flex items-center justify-between"
        onClick={() => setShowOrderSummary(!showOrderSummary)}
      >
        <h1 className="text-xl text-white flex items-center gap-2">
          Order Summary
        </h1>
        <IoIosArrowDown
          size={24}
          className={`text-white transform transition-transform duration-300 ${
            showOrderSummary ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Order Summary Details */}
      {showOrderSummary && (
        <div className="w-250 bg-white rounded shadow-md p-4 space-y-3">
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                </div>
              ))}
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total</span>
                <span>₹{calculateTotal()}</span>
              </div>
            </>
          )}
        </div>
      )}

      
  <div className="fixed top-20 right-10 w-[320px] p-6 bg-white shadow-lg rounded-md z-10">
    <h2 className="text-xl font-semibold mb-4 border-b pb-2">PRICE DETAILS</h2>

    <div className="space-y-3 text-sm text-gray-700">
      <div className="flex justify-between">
        <span>Price ({cartItems.length} items)</span>
        <span>₹{calculateTotal()}</span>
      </div>

      <div className="flex justify-between">
        <span>Discount</span>
        <span className="text-green-600">- ₹12,564</span>
      </div>

      <div className="flex justify-between">
        <span>Buy more &amp; save more</span>
        <span className="text-green-600">- ₹119</span>
      </div>

      <div className="flex justify-between">
        <span>Coupons for you</span>
        <span className="text-green-600">- ₹32</span>
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

      <div className="border-t pt-2 flex justify-between font-semibold text-lg">
        <span>Total Amount</span>
        <span>₹17,165</span>
      </div>

      <div className="border-t pt-2 mt-4">
        <p className="font-medium text-green-700">
          You will save ₹12,518 on this order
        </p>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Payment;