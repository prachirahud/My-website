// import mongoose from "mongoose";

// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// });

// const contactus = mongoose.model("contactus", contactSchema);
// export default contactus; // Ensure it is a default export

import mongoose from 'mongoose';

// Define the schema for the contact form
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Create and export the model
const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
