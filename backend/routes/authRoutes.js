import express from 'express';
import { signUp, login } from '../controllers/authController.js';

const Router = express.Router();

Router.post("/signup", signUp);
Router.post("/login", login);

export default Router;
