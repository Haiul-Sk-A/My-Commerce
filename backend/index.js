import express from 'express';
import connectDB from './Database/db.js';
// import route from './routes/userRoute.js'
import authRoutes from './routes/authRoutes.js'
import dotenv from 'dotenv';
import productRouter from './routes/productRoutes.js';
dotenv.config()

connectDB();
const PORT = process.env.PORT ||8080;

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use(express.json());

app.use('/api',authRoutes);
app.use('/api', productRouter);

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`✅ Server running on localhost:${PORT}`)
});