import Contact from "../models/contactModel.js";

// Controller function to handle contact form submissions
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the data
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Create a new Contact document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact data to the database
    await newContact.save();

    // Send a success response
    res.status(201).json({ success: true, message: "Message received!" });
  } catch (error) {
    // Handle server errors
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


// import Contact from '../models/contact.js';

// export const submitContactForm = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();
//     res.status(201).json({ success: true, message: 'Message received!' });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };
