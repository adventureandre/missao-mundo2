import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mbzz:Vr9chlS2eBl0zZUU@127.0.0.1:27017/cadastro?authSource=admin', {
 
    });
    console.log('MongoDB connected'+ new Date().toLocaleString());
  } catch (error) {
    console.error('MongoDB connection error:'+ new Date().toLocaleString(), error);
    process.exit(1);
  }
};

export default connectDB;
