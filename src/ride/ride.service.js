const Ride = require("./ride.model");
const User = require("../user/user.model");
exports.getAllRides = () => Ride.find().populate("locations");
exports.getRideById = (id) => Ride.findById(id).populate("user");
exports.createRide = async (rideData) => {
  try {
    const ride = await Ride.create(rideData);
    await User.findByIdAndUpdate(rideData.user, {
      $push: { rides: ride._id },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
exports.updateRide = (id, rideData) =>
  Ride.findByIdAndUpdate(id, rideData, { new: true });
exports.deleteRide = (id) => Ride.findByIdAndDelete(id);
