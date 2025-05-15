import express from 'express';
import connectDB from './Database/db.js';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';
dotenv.config()

connectDB();
const PORT = process.env.PORT || 4000;

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World");
});

// app.use("/api",route)

app.listen(PORT,()=>{
    console.log(`Server runnning:http://localhost:${PORT}`)
});