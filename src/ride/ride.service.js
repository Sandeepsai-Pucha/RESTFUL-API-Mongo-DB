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

    return {
      success: true,
      message: 'Ride created successfully',
      data: ride
    };
  } catch (error) {
    console.error("Error creating ride:", error);
    return {
      success: false,
      message: 'Error creating ride',
      error: error.message
    };
  }
};

exports.updateRide = (id, rideData) =>
  Ride.findByIdAndUpdate(id, rideData, { new: true });
exports.deleteRide = (id) => Ride.findByIdAndDelete(id);
