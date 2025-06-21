import React from 'react';

const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-sm w-full max-w-5xl">
        
        {/* Left Section */}
        <div className="bg-blue-600 text-white p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <p className="text-lg mb-6">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1134.jpg" 
              alt="Illustration"
              className="max-w-[300px] mb-4"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center gap-6">

          {/* Email/Mobile Input with floating label */}
          <div className="relative w-full">
<input 
    type="text" 
    id="email" 
    placeholder=" " 
    className="peer w-full border-b-2 border-gray-300 px-0 py-3 text-lg focus:border-blue-600 focus:outline-none" 
  />
  <label 
    htmlFor="email"
    className="absolute left-0 text-gray-500 top-3 transition-all duration-200 
               peer-placeholder-shown:top-3 
               peer-placeholder-shown:text-lg 
               peer-focus:top-0 
               peer-focus:text-sm 
               peer-focus:text-blue-600">
    Enter Email/Mobile number
  </label>
          </div>

          <p className="text-sm text-gray-600">
            By continuing, you agree to Flipkart's 
            <a href="#" className="text-blue-600 ml-1">Terms of Use</a> and 
            <a href="#" className="text-blue-600 ml-1">Privacy Policy</a>.
          </p>

          <button className="w-full bg-orange-500 text-white py-3 rounded text-lg font-semibold hover:bg-orange-600 transition">
            Request OTP
          </button>

          <p className="text-center text-sm">
            New to Flipkart?{" "}
            <a href="#" className="text-blue-600 font-medium">Create an account</a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignIn;