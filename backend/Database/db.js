import { MongoClient } from 'mongodb';

const mongoUrl = 'mongodb+srv://haiulsk873:haiul873@cluster0.5ciqgtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    const client = new MongoClient(mongoUrl); // no options needed
    await client.connect();

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};


export default connectDB;