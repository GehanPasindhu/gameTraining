const { Course } = require('../models');

exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, duration, imageUrl } = req.body;

  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    course.title= title ?? course.title;
    course.description = description ?? course.description;
    course.duration = duration ?? course.duration;
    course.imageUrl = imageUrl ?? course.imageUrl;

    await course.save();
    res.json({ message: 'Course updated successfully', course });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update course' });
  }
};
