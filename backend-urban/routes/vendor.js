const express = require("express");
const review = require("./review");
const {
  createVendor,
  getAllVendor,
  updateVendor,
  getVendor,
} = require("../controller/vendor");
const router = express.Router();

router.route("/").post(createVendor).get(getAllVendor);
router.patch("/:id", updateVendor);
router.get("/:id", getVendor);
router.use("/review", review);
module.exports = router;
