import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoUrl = process.env.Mongo_Url;

const connectDB = async () => {
  try {
    const client = new MongoClient(mongoUrl); 
    await client.connect();

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};


export default connectDB;