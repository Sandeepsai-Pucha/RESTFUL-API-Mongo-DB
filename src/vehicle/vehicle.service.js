const Vehicle = require("./vehicle.model");
exports.getAllVehicles = () => Vehicle.find().populate("driver");
exports.getVehicleById = (id) => Vehicle.findById(id).populate("driver");
exports.createVehicle = (vehicleData) => Vehicle.create(vehicleData);
exports.updateVehicle = (id, vehicleData) =>
  Vehicle.findByIdAndUpdate(id, vehicleData, { new: true });
exports.deleteVehicle = (id) => Vehicle.findByIdAndDelete(id);
