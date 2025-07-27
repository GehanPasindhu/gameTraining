const express = require('express');
const router = express.Router();
const { Course } = require('../models');
const auth = require('../middleware/authMiddleware');
const { updateCourse } = require('../controllers/courseController');

// Public: Get all courses
router.get('/', async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
});

// Get a course by ID
router.get('/:id', async (req, res) => {
    try {
      const course = await Course.findByPk(req.params.id);
  
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
  
      res.json(course);
    } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Admin: Add a course
router.post('/', auth, async (req, res) => {
  const { title, image_url, description, duration } = req.body;
  const course = await Course.create({ title, image_url, description, duration });
  res.json(course);
});

// Admin: Updates a course
router.put('/:id', auth, updateCourse);

// Admin: Delete a course
router.delete('/:id', auth, async (req, res) => {
  await Course.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
});

module.exports = router;
