import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import user from 'scheme'
import mongoURI from 'uri'

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB', err);
  });