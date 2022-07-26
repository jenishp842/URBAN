const express = require("express");
const {
  getAllservice,
  createService,
  updateService,
  getVendorsbyId,
} = require("../controller/services");
const router = express.Router();
router.route("/").get(getAllservice).post(createService);
router.patch("/:id", updateService);
router.post("/vendors", getVendorsbyId);
module.exports = router;
