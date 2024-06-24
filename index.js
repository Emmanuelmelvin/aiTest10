import mongoose from 'mongoose';
// import axios from 'axios'
import { User } from './scheme.js'
import { mongoURI } from './uri.js'

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB', err);
  })