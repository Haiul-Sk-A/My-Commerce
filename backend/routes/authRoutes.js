import express from 'express';
import signUp from '../Controllers/authController.js'; // Make sure .js is included if using ESM

const Router = express.Router();

Router.post("/signup", signUp);

export default Router;