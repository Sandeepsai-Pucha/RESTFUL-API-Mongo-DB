const driverService = require("./driver.service");

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await driverService.getAllDrivers();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDriverById = async (req, res) => {
  try {
    const driver = await driverService.getDriverById(req.params.id);
    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDriver = async (req, res) => {
  try {
    const newDriver = await driverService.createDriver(req.body);
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateDriver = async (req, res) => {
  try {
    const updatedDriver = await driverService.updateDriver(
      req.params.id,
      req.body
    );
    res.json(updatedDriver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteDriver = async (req, res) => {
  try {
    await driverService.deleteDriver(req.params.id);
    res.json({ message: "Driver deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
