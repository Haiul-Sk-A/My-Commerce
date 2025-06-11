import jwt from 'jsonwebtoken';
import User from '../models/user.js'; 

export const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied" }); 
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); 

        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(404).json({ msg: "User not found" }); 
        }

        req.user = user;
        next();

    } catch (err) {
        console.error("Auth error:", err.message); 
        res.status(401).json({ msg: "Token is invalid or expired" });
    }
};
