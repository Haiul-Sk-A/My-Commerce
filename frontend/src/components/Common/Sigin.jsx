import React from 'react';

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen px-4 gap-8 border-black-5">
      
      {/* Left Section */}
      <div className="bg-blue-600 text-white px-6 py-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-2">Login</h1>
        <p className="text-md text-gray-200">
          Get access to your orders, wishlist, and recommendations.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6 w-full  max-w-md md:mt-0 justify-center">

      {/* Email Input with Floating Label */}
      <div className="relative">
        <input 
          type="text" 
          id="email"
          placeholder=" " 
          className="peer w-full px-2 py-3 text-lg border-b-2 border-gray-400 outline-none  hover:border-blue-600 focus:border-blue-600 transition-all"/>
        <label 
          htmlFor="email" 
          className="absolute left-2 top-3 text-gray-500 text-md transition-all peer-placeholder-shown:top-3  peer-placeholder-shown:text-lg  peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-600">
          Email
        </label>
      </div>

      {/* Button */}
      <button className="w-28 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 mx-auto">
        Request OTP
      </button>
    </div>
    </div>
  );
};

export default SignIn;