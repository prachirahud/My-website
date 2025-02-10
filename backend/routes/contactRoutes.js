import express from "express";
import { createContact } from "../controllers/contactControler.js"; 

const router = express.Router();

// Define the POST route for the contact form
router.post("/", createContact); 

export default router;
