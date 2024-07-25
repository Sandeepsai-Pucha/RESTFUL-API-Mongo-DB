const regionService = require("./region.service");

exports.getAllRegions = async (req, res) => {
  try {
    const regions = await regionService.getAllRegions();
    res.json(regions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRegionById = async (req, res) => {
  try {
    const region = await regionService.getRegionById(req.params.id);
    res.json(region);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRegion = async (req, res) => {
  try {
    const newRegion = await regionService.createRegion(req.body);
    res.status(201).json(newRegion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateRegion = async (req, res) => {
  try {
    const updatedRegion = await regionService.updateRegion(
      req.params.id,
      req.body
    );
    res.json(updatedRegion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteRegion = async (req, res) => {
  try {
    await regionService.deleteRegion(req.params.id);
    res.json({ message: "Region deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
