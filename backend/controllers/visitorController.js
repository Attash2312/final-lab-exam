const Visitor = require('../models/visitor');

// Create a new visitor
const createVisitor = async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    await visitor.save();
    res.status(201).json(visitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all visitors
const getVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.status(200).json(visitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a visitor
const updateVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!visitor) {
      return res.status(404).json({ error: 'Visitor not found' });
    }
    res.status(200).json(visitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a visitor
const deleteVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findByIdAndDelete(req.params.id);
    if (!visitor) {
      return res.status(404).json({ error: 'Visitor not found' });
    }
    res.status(200).json({ message: 'Visitor deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createVisitor,
  getVisitors,
  updateVisitor,
  deleteVisitor
};
