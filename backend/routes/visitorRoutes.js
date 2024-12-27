const express = require('express');
const {
  createVisitor,
  getVisitors,
  updateVisitor,
  deleteVisitor
} = require('../controllers/visitorController');

const router = express.Router();

// Define routes for visitors
router.get('/', getVisitors);           // Get all visitors
router.post('/', createVisitor);        // Create a new visitor
router.put('/:id', updateVisitor);      // Update a visitor by ID
router.delete('/:id', deleteVisitor);   // Delete a visitor by ID

module.exports = router;
