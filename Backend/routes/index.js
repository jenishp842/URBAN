var express = require("express");
const { Register, Login } = require("../controller/user");
const Catagory = require("./catagory");
const Services = require("./Services.js");
const Vendor = require("./vendor");
var router = express.Router();

router.post("/login", Login);
router.post("/register", Register);
router.use("/catagory", Catagory);
router.use("/service", Services);
router.use("/vendor", Vendor);
module.exports = router;
