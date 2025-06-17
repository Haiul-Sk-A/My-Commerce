import express, { Router } from 'express'
import { addProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/product',addProduct);

export default productRouter;