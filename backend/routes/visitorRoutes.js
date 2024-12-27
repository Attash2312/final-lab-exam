const express = require('express');
const {
  registerVisitor,
  updateVisitor,
  deleteVisitor
} = require('../controllers/visitorController');

const router = express.Router();

// Register a new visitor
router.post('/', registerVisitor);

// Update an existing visitor by ID
router.put('/:id', updateVisitor);

// Delete a visitor by ID
router.delete('/:id', deleteVisitor);

module.exports = router;
