import express from 'express';
import { signUp, login, getProfile, logout } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const Router = express.Router();

Router.post("/signup", signUp);
Router.post("/login", login);
Router.get("/profile",protect,getProfile);
Router.post("/logout",logout);

export default Router;
