import express, { Router } from 'express'
import { Product } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/product',Product);

export default productRouter;