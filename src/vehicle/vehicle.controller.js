const vehicleService = require("./vehicle.service");

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await vehicleService.getVehicleById(req.params.id);
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createVehicle = async (req, res) => {
  try {
    const newVehicle = await vehicleService.createVehicle(req.body);
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await vehicleService.updateVehicle(
      req.params.id,
      req.body
    );
    res.json(updatedVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    await vehicleService.deleteVehicle(req.params.id);
    res.json({ message: "Vehicle deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
