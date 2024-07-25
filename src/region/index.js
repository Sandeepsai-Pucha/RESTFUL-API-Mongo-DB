const express = require("express");
const regionController = require("./region.controller.js");
const router = express.Router();

/* USER Routes */
router.get("/", regionController.getAllRegions);
router.get("/:id", regionController.getRegionById);
router.post("/", regionController.createRegion);
router.patch("/:id", regionController.updateRegion);
router.delete("/:id", regionController.deleteRegion);

module.exports = router;
