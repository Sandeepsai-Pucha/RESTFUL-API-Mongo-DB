const Driver = require("./driver.model");

exports.getAllDrivers = () => Driver.find().populate("region");
exports.getDriverById = (id) => Driver.findById(id).populate("region");
exports.createDriver = (driverData) => Driver.create(driverData);
exports.updateDriver = (id, driverData) =>
  Location.findByIdAndUpdate(id, driverData, { new: true });
exports.deleteDriver = (id) => Driver.findByIdAndDelete(id);
