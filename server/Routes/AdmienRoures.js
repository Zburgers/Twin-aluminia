const express = require("express");
const router = express.Router();
const AdmineControllers = require("../Controllers/AdmineControllers");

router.route("/admineregister").post(AdmineControllers.register);
router.route("/adminelogin").post(AdmineControllers.login);

module.exports = router;