const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  region: { type: mongoose.Schema.Types.ObjectId, ref: "Region" },
});

module.exports = mongoose.model("Location", locationSchema);
