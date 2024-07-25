const express = require("express");
const userController = require("./user.controller.js");
const router = express.Router();

/* USER Routes */
router.get("/get-all-users", userController.getAllUsers);
router.get("/get-user/:id", userController.getUserById);
router.post("/create", userController.createUser);
router.patch("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
