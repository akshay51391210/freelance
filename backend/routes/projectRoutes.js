const express = require('express');
const { getProjects, addProject, updateProject, deleteProject } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getProjects).post(protect, addProject); // only logged-in client posts

router.route('/:id').put(protect, updateProject).delete(protect, deleteProject);

module.exports = router;
