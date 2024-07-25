const rideService = require("./ride.service.js");

exports.getAllRides = async (req, res) => {
  try {
    const rides = await rideService.getAllRides();
    res.json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRideById = async (req, res) => {
  try {
    const ride = await rideService.getRideById(req.params.id);
    res.json(ride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRide = async (req, res) => {
  try {
    const newRide = await rideService.createRide(req.body);
    res.status(201).json(newRide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateRide = async (req, res) => {
  try {
    const updatedRide = await rideService.updateRide(req.params.id, req.body);
    res.json(updatedRide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteRide = async (req, res) => {
  try {
    await rideService.deleteRide(req.params.id);
    res.json({ message: "Ride deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
