const Attraction = require('../models/attraction');

exports.getAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.json(attractions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAttraction = async (req, res) => {
  try {
    const attraction = new Attraction(req.body);
    const savedAttraction = await attraction.save();
    res.status(201).json(savedAttraction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateAttraction = async (req, res) => {
    try {
      const attraction = await Attraction.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!attraction) {
        return res.status(404).json({ error: "Attraction not found" });
      }
      res.json(attraction);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.deleteAttraction = async (req, res) => {
    try {
      const attraction = await Attraction.findByIdAndDelete(req.params.id);
      if (!attraction) {
        return res.status(404).json({ error: "Attraction not found" });
      }
      res.json({ message: "Attraction deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  