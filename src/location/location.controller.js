const locationService = require("./location.service");

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await locationService.getAllLocations();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLocationById = async (req, res) => {
  try {
    const location = await locationService.getLocationById(req.params.id);
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLocation = async (req, res) => {
  try {
    const newLocation = await locationService.createLocation(req.body);
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const updatedLocation = await locationService.updateLocation(
      req.params.id,
      req.body
    );
    res.json(updatedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    await locationService.deleteLocation(req.params.id);
    res.json({ message: "Location deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sendLocation = async (req, res) => {
  try {
    let value=await locationService.sendLocation(req.body);
    res.json({ address:value });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.pickAndDrop = async (req, res) => {
  try {
    let value=await locationService.pickAndDrop(req.body);
    res.json({ address:value });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRide = async (req, res) => {
  try {
    let value=await locationService.createRide(req.body);
    res.json({ address:value });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
