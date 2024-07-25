const express = require("express");
const app = express();

// Import route handlers
const userRoutes = require("../src/user/index");
const driverRoutes = require("../src/driver/index");
const rideRoutes = require("../src/ride/index");
const locationRoutes = require("../src/location/index");
const regionRoutes = require("../src/region/index");
const vehicleRoutes = require("../src/vehicle/index");

// Define routes
app.use("/api/users", userRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/rides", rideRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/regions", regionRoutes);
app.use("/api/vehicles", vehicleRoutes);

// module.exports = app;
