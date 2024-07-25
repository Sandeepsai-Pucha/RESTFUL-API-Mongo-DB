const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  type: { type: String, required: true },
  year: { type: Number, required: true },
  licensePlate: { type: String, required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
