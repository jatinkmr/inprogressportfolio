import { Router } from "express";
import { storage } from "./storage.js";
import { contactFormSchema } from "../shared/schema.js";

const router = Router();

// Contact form submission endpoint
router.post("/api/contact", async (req, res) => {
  try {
    // Validate the request body
    const validatedData = contactFormSchema.parse(req.body);
    
    // Store the contact form submission
    const contactEntry = await storage.createContactEntry(validatedData);
    
    res.json({ 
      success: true, 
      message: "Message sent successfully!",
      id: contactEntry.id 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(400).json({ 
      success: false, 
      message: "Failed to send message. Please try again." 
    });
  }
});

export { router };
