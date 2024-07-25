const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
  rides: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ride" }],
});

module.exports = mongoose.model("Driver", driverSchema);
