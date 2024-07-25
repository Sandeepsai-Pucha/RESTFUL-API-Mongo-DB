const express = require("express");
const vehicleController = require("./vehicle.controller");
const router = express.Router();

router.get("/", vehicleController.getAllVehicles);
router.get("/:id", vehicleController.getVehicleById);
router.post("/create-vehicle", vehicleController.createVehicle);
router.patch("/:id", vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);

module.exports = router;
