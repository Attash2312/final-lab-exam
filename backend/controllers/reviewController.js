const Review = require('../models/review');
const Attraction = require('../models/attraction');
const Visitor = require('../models/visitor');

// Add a new review
exports.addReview = async (req, res) => {
    try {
      const { attractionId, visitorId, rating, comment } = req.body;
  
      // Ensure attraction exists
      const attraction = await Attraction.findById(attractionId);
      if (!attraction) {
        return res.status(404).json({ error: "Attraction not found" });
      }
  
      // Ensure visitor exists
      const visitor = await Visitor.findById(visitorId);
      if (!visitor) {
        return res.status(404).json({ error: "Visitor not found" });
      }
  
      // Ensure visitor hasn't already reviewed this attraction
      const existingReview = await Review.findOne({ attractionId, visitorId });
      if (existingReview) {
        return res.status(400).json({ error: "You have already reviewed this attraction" });
      }
  
      // Create and save the review
      const review = new Review({ attractionId, visitorId, rating, comment });
      await review.save();
  
      // Update the attraction's average rating
      const reviews = await Review.find({ attractionId });
      const averageRating =
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
      attraction.averageRating = averageRating;
      await attraction.save();
  
      res.status(201).json(review);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };