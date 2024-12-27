const express = require('express');
const {
  getAttractions,
  createAttraction,
  updateAttraction,
  deleteAttraction
} = require('../controllers/attractionController');

const router = express.Router();

// Get all attractions
router.get('/', getAttractions);

// Create a new attraction
router.post('/', createAttraction);

// Update an existing attraction by ID
router.put('/:id', updateAttraction);

// Delete an attraction by ID
router.delete('/:id', deleteAttraction);

module.exports = router;
