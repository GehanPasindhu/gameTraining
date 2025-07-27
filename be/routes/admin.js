// routes/admin.js
const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

const router = express.Router();

// Create new admin
router.post('/create', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ message: 'Username and password are required.' });

    const existing = await Admin.findOne({ where: { username } });
    if (existing)
      return res.status(409).json({ message: 'Username already exists.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({ username, password_hash: hashedPassword });

    res.status(201).json({ message: 'Admin created successfully', admin: { id: newAdmin.id, username: newAdmin.username } });
  } catch (err) {
    console.error('Error creating admin:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
