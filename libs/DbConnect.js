import mongoose from 'mongoose';

// let MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  try {
    await mongoose.connect('mongodb+srv://tscript:mira247a@tomzor.axomd8j.mongodb.net/staffProfile', {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
dbConnect();

export default dbConnect;
