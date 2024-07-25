const express = require("express");
const driverContoller = require("./driver.controller");
const router = express.Router();

router.get("/", driverContoller.getAllDrivers);
router.get("/:id", driverContoller.getDriverById);
router.post("/create", driverContoller.createDriver);
router.patch("/:id", driverContoller.updateDriver);
router.delete("/:id", driverContoller.deleteDriver);

module.exports = router;
