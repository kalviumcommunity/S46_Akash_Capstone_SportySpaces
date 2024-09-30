const Playground = require('../models/Playground');

exports.getPlaygrounds = async (req, res) => {
  try {
    const playgrounds = await Playground.find();
    res.status(200).json(playgrounds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPlayground = async (req, res) => {
  const { name, location, rent, max_players, phone_number } = req.body;

  try {
    const newPlayground = new Playground({
      name,
      location,
      rent,
      max_players,
      phone_number,
    });

    await newPlayground.save();
    res.status(201).json(newPlayground);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePlayground = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedPlayground = await Playground.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPlayground) return res.status(404).json({ message: 'Playground not found' });
    
    res.status(200).json(updatedPlayground);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
