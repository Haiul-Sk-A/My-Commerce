import express from 'express';
import connectDB from './Database/db.js';
import dotenv from 'dotenv';
dotenv.config()

connectDB();
const PORT = process.env.PORT||3000
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(PORT,()=>{
    console.log(`Server runnning:http://localhost:${PORT}`)
});