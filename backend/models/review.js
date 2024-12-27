const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  attractionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Attraction', required: true },
  visitorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Visitor', required: true },
  rating: { type: Number, required: true },
  score: { type: Number, required: true, min: 1, max: 5 },
  comment: String,
});

module.exports = mongoose.model('Review', reviewSchema);
