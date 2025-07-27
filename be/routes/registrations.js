const express = require('express');
const router = express.Router();
const { Registration, Course } = require('../models');

// Public: Register a student
router.post('/', async (req, res) => {
  const { full_name, email, phone_number, message, courseId } = req.body;
  const registration = await Registration.create({ full_name, email, phone_number, message, courseId });
  res.json(registration);
});

// Admin: View all registrations
const auth = require('../middleware/authMiddleware');
router.get('/', auth, async (req, res) => {
  const registrations = await Registration.findAll({ include: Course });
  res.json(registrations);
});

module.exports = router;
