import mongoose from 'mongoose'

// Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });
  
  // Create a model
  export const User = mongoose.model('User', userSchema);
  