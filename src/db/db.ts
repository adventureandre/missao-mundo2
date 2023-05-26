import mongoose from 'mongoose';


const DB=process.env.DB
const USER=process.env.USER
const PWD=process.env.PWD
 

const URL_USER =`mongodb://${USER}:${PWD}@127.0.0.1:27017/${DB}?authSource=admin`

const URL=URL_USER
const connectDB = async () => {
  try {
    await mongoose.connect( URL, {
 
    });
    console.log('MongoDB connected '+ new Date().toLocaleString());
  } catch (error) {
    console.error('MongoDB connection error: '+ new Date().toLocaleString(), error);
    process.exit(1);
  }
};

export default connectDB;
