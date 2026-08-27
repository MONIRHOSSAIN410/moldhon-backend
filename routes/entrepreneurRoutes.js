import express from 'express';
import Entrepreneur from '../models/Entrepreneur.js';
import { validateRegistration } from '../middleware/validateRegistration.js';

const router = express.Router();

// POST: Register standard entrepreneur
router.post('/register', validateRegistration, async (req, res) => {
  try {
    const { fullName, email, phone, organization, location, focusArea, shortBio } = req.body;

    const existingUser = await Entrepreneur.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'An entrepreneur with this email already exists.' 
      });
    }

    const newEntrepreneur = await Entrepreneur.create({
      fullName,
      email,
      phone,
      organization,
      location,
      focusArea,
      shortBio
    });

    return res.status(201).json({
      success: true,
      message: 'Entrepreneur account created successfully',
      data: newEntrepreneur
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// GET: Retrieve all registrations (Admin route example)
router.get('/all', async (req, res) => {
  try {
    const entrepreneurs = await Entrepreneur.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: entrepreneurs.length,
      data: entrepreneurs
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

export default router;