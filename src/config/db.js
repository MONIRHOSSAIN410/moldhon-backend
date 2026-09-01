import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/muldhon';
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(uri);
    console.log(`\x1b[32m✔ MongoDB connected:\x1b[0m ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`\x1b[31m✖ MongoDB connection error:\x1b[0m ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
