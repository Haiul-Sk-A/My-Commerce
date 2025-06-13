import express, { Router } from 'express'
import { product } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/product',product)

export default productRouter;