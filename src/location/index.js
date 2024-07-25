const express = require("express");
const locationController = require("./location.controller.js");
const router = express.Router();

router.get("/", locationController.getAllLocations);
router.get("/:id", locationController.getLocationById);
router.post("/", locationController.createLocation);
router.patch("/:id", locationController.updateLocation);
router.delete("/:id", locationController.deleteLocation);

module.exports = router;
