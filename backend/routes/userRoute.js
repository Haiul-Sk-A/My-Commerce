import express from 'express';
import signup from '../controller/userController.js';

const route = express.Router(); 

route.post("/signup",signup );

export default route;