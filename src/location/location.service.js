const Location = require("./location.model");

exports.getAllLocations = () => Location.find().populate("region");
exports.getLocationById = (id) => Location.findById(id).populate("region");
exports.createLocation = (locationData) => Location.create(locationData);
exports.updateLocation = (id, locationData) =>
  Location.findByIdAndUpdate(id, locationData, { new: true });
exports.deleteLocation = (id) => Location.findByIdAndDelete(id);
