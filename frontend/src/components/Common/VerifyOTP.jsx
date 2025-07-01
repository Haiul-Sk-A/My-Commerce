import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const emailOrMobile = location.state?.emailOrMobile || '';

  const handleVerify = () => {
    if (otp === '123456') {
      alert('OTP verified successfully!');
      // Redirect or perform login action here
      navigate('/')
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Verify OTP</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter the OTP sent to <span className="font-semibold">{emailOrMobile}</span>
        </p>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter 6-digit OTP"
          className="w-full border-b-2 border-gray-300 py-3 px-2 mb-4 text-lg focus:border-blue-600 focus:outline-none"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-3 rounded text-lg font-semibold hover:bg-blue-700 transition"
        >
          Verify
        </button>

        <p className="text-center text-sm mt-4">
          Didn’t receive OTP? <span className="text-blue-600 cursor-pointer">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;
