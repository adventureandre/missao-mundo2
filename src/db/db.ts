import mongoose from 'mongoose';

import {URL_SELECIONADA} from '../../setDB'
  
const DB=process.env.DB
const USER=process.env.USER
const PWD=process.env.PWD

const PORT=process.env.PORT


 var  URL=URL_SELECIONADA
 


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
