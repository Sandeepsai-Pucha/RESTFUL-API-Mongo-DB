const mongoose = require("mongoose");
const Ride = require("../ride/ride.model");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  user_type: {
    type: String,
    enum: ["passenger", "driver"],
    default: "passenger",
  },
});

userSchema.virtual("dfgfsg", {
  ref: "Ride",
  localField: "_id", // The field in the User schema
  foreignField: "user", // The field in the Ride schema
});

module.exports = mongoose.model("User", userSchema);
