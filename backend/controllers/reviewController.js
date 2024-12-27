const Review = require('../models/review');
const Visitor = require('../models/visitor');
const Attraction = require('../models/attraction');

// Create a new review
const createReview = async (req, res) => {
  try {
    const { attractionId, visitorId, rating, score, comment } = req.body;

    // Check if the visitor has visited the attraction
    const visitor = await Visitor.findById(visitorId);
    if (!visitor) {
      return res.status(404).json({ error: 'Visitor not found' });
    }

    if (!visitor.visitedAttractions.includes(attractionId)) {
      return res.status(400).json({ error: 'Visitor must visit the attraction before reviewing it' });
    }

    // Check if the visitor has already reviewed the attraction
    const existingReview = await Review.findOne({ attractionId, visitorId });
    if (existingReview) {
      return res.status(400).json({ error: 'You have already reviewed this attraction' });
    }

    // Create the review
    const review = new Review({ attractionId, visitorId, rating, score, comment });
    await review.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get reviews for a specific attraction
const getReviews = async (req, res) => {
  try {
    const { attractionId } = req.params;
    const reviews = await Review.find({ attractionId }).populate('visitorId', 'name email');

    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a review
const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createReview,
  getReviews,
  updateReview,
  deleteReview
};
