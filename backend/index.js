import express from 'express';
import connectDB from './Database/db.js';
// import route from './routes/userRoute.js'
import dotenv from 'dotenv';
dotenv.config()

connectDB();
const PORT = process.env.PORT;

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World");
});

// app.use("/api",route)
if (!PORT) {
  throw new Error('❌ process.env.PORT is not set. Render sets this automatically.');
}

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server runnning:http://localhost:${PORT}`)
});