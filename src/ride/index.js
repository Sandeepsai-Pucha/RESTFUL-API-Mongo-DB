const express = require("express");
const rideController = require("./ride.controller.js");
const router = express.Router();

router.get("/", rideController.getAllRides);
router.get("/:id", rideController.getRideById);
router.post("/create-ride", rideController.createRide);
router.patch("/:id", rideController.updateRide);
router.delete("/:id", rideController.deleteRide);

module.exports = router;
