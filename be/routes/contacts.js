const express = require('express');
const router = express.Router();
const { ContactMessage } = require('../models');

// Public: Submit contact message
router.post('/', async (req, res) => {
  const { full_name, email, phone_number, message } = req.body;
  const contact = await ContactMessage.create({ full_name, email, phone_number, message });
  res.json(contact);
});

// Admin: View all contact messages
const auth = require('../middleware/authMiddleware');
router.get('/', auth, async (req, res) => {
  const messages = await ContactMessage.findAll();
  res.json(messages);
});

module.exports = router;
