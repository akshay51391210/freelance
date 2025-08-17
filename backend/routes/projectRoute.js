const express = require('express');
const { getProjects, addProject, updateProject, deleteProject } = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// All projects (open projects visible to everyone)
router.route('/')
  .get(getProjects)
  .post(protect, addProject); // only logged-in client posts

// Single project (update/delete)
router.route('/:id')
  .put(protect, updateProject)
  .delete(protect, deleteProject);

module.exports = router;
