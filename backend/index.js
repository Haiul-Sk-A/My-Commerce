import express from 'express';
import connectDB from './Database/db.js';
// import route from './routes/userRoute.js'
import dotenv from 'dotenv';
dotenv.config()

connectDB();
const PORT = process.env.PORT ||8080;

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World");
});

// app.use("/api",route)

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`✅ Server running on http://0.0.0.0:${PORT}`)
});