import User from '../models/user.js';  // Changed from 'user' to 'User' for naming consistency
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { json } from 'express';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashPassword });
        await newUser.save();

        const token = createToken(newUser._id);

        res.status(201).json({ user: newUser, token });

    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        const token = createToken(existingUser._id);

        res.status(200).json({ user: existingUser, token });

    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};

export const getProfile = async (req,res)=>{
    res.status(200).json(req.user);
}