const express = require('express');
const {
  createReview,
  getReviews,
  updateReview,
  deleteReview
} = require('../controllers/reviewController');

const router = express.Router();

// Create a new review
router.post('/', createReview);

// Get reviews for a specific attraction
router.get('/:attractionId', getReviews);

// Update a review by ID
router.put('/:id', updateReview);

// Delete a review by ID
router.delete('/:id', deleteReview);

module.exports = router;
