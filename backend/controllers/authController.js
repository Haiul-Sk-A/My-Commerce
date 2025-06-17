import User from '../models/user.js'; 
import jwt from 'jsonwebtoken';
import { sendOtpEmail } from '../sendOtp/sendOtp.js';

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

export const signUp = async (req, res) => {
  const { email, otp } = req.body;

try {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ msg: "Email already exists" });
  }

  if (!otp) {
    const generateOtp = Math.floor(100000 + Math.random() * 900000).toString();

    otpStore.set(email, {
      otp: generateOtp,
      expiresOn: Date.now() + 5 * 60 * 1000,
    });

    await sendOtpEmail(email, generateOtp);

    return res.status(200).json({ msg: "OTP sent to email" });
  }

  const otpData = otpStore.get(email);

  if (!otpData) {
    return res.status(400).json({ msg: "Invalid or expired OTP" });
  }

  if (otpData.otp !== otp) {
    return res.status(400).json({ msg: "Invalid or expired OTP" });
  }

  if (Date.now() > otpData.expiresOn) {
    return res.status(400).json({ msg: "Invalid or expired OTP" });
  }


  otpStore.delete(email);

  const newUser = new User({ email });
  await newUser.save();

  const token = createToken(newUser._id);

  res.status(201).json({ user: newUser, token });

} catch (err) {
  res.status(500).json({ msg: "Server error" });
}
};

const otpStore = new Map();

export const login = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ msg: "Invalid email" });
    }

    if (!otp) {
      const generateOtp = Math.floor(100000 + Math.random() * 900000).toString();

      otpStore.set(email, {
        otp: generateOtp,
        expiresOn: Date.now() + 5 * 60 * 1000,
      });

      await sendOtpEmail(email, generateOtp);

      return res.status(200).json({ msg: "OTP sent to email" });
    }

    const otpData = otpStore.get(email);

    if (!otpData || otpData.otp !== otp || Date.now() > otpData.expiresOn) {
      return res.status(400).json({ msg: "Invalid or expired OTP" });
    }

    otpStore.delete(email);

    const token = createToken(existingUser._id);

    res.status(200).json({
      msg: "User login successful",
      user: existingUser,
      token,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};


export const getProfile = async (req,res)=>{
  res.status(200).json(req.user);
}

export const logout = async (req, res) => {
  res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
  });

  res.status(200).json({ msg: "Logout successful" });
};
