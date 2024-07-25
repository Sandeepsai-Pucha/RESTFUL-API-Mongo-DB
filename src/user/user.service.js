const User = require("./user.model");
const Ride = require("../ride/ride.model");
exports.getAllUsers = () => User.find();
exports.getUserById = async (id) => {
  try {
    const user = await User.findById(id)
      .populate({
        path: "dfgfsg",
        populate: {
          path: "vehicle",
          model: "Vehicle",
        },
      })
      .exec();
    return user;
    // const user = await User.findById(id).exec();
    // if (!user) {
    //   throw new Error("User not found");
    // }

    // const rides = await Ride.find({ user: user._id })
    //   .populate("vehicle")
    //   .exec();

    // // Combine the user and rides data
    // return {
    //   ...user.toObject(),
    //   rides,
    // };
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
exports.createUser = (regionData) => User.create(regionData);
exports.updateUser = (id, regionData) =>
  User.findByIdAndUpdate(id, regionData, { new: true });
exports.deleteUser = (id) => User.findByIdAndDelete(id);
