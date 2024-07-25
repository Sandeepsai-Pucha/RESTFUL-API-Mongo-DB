const Region = require("./region.model");

exports.getAllRegions = () => Region.find().populate("locations");
exports.getRegionById = (id) => Region.findById(id).populate("locations");
exports.createRegion = (regionData) => Region.create(regionData);
exports.updateRegion = (id, regionData) =>
  Region.findByIdAndUpdate(id, regionData, { new: true });
exports.deleteRegion = (id) => Region.findByIdAndDelete(id);
