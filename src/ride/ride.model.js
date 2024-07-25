const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  startLocation: {
    type: String,
    required: true,
  },
  endLocation: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "canceled"],
    default: "pending",
  },
  fare: { type: Number, required: true },
  rideDate: { type: Date, default: Date.now },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
});

module.exports = mongoose.model("Ride", rideSchema);
