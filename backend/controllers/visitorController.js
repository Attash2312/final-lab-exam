const Visitor = require('../models/visitor');

exports.registerVisitor = async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    const savedVisitor = await visitor.save();
    res.status(201).json(savedVisitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!visitor) {
      return res.status(404).json({ error: "Visitor not found" });
    }
    res.json(visitor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteVisitor = async (req, res) => {
  try {
    const visitor = await Visitor.findByIdAndDelete(req.params.id);
    if (!visitor) {
      return res.status(404).json({ error: "Visitor not found" });
    }
    res.json({ message: "Visitor deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
