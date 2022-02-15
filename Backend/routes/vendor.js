const express = require("express");
const {
  createVendor,
  getAllVendor,
  updateVendor,
} = require("../controller/vendor");
const router = express.Router();

router.route("/").post(createVendor).get(getAllVendor);
router.patch("/:id", updateVendor);
module.exports = router;
