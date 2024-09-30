const mongoose = require('mongoose');

const playgroundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  max_players: {
    type: Number,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('playground_detail', playgroundSchema);
