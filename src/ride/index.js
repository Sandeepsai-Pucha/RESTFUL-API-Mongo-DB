const express = require("express");
const rideController = require("./ride.controller.js");
const router = express.Router();

router.get("/", rideController.getAllRides);
router.get("/:id", rideController.getRideById);
// for creating  the ride options
router.post("/create-ride", rideController.createRide);
router.patch("/:id", rideController.updateRide);
// for deleting the ride 
router.delete("/:id", rideController.deleteRide);

module.exports = router;
