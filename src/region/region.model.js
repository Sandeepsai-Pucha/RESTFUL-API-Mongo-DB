const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  locations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }],
});

module.exports = mongoose.model("Region", regionSchema);
