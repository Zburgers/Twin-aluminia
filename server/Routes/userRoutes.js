const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/viewusers").get(userController.viewusers);

module.exports = router;