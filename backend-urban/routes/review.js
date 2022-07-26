const express = require("express");
const {
  getAllReview,
  createReview,
  updateReview,
} = require("../controller/review");

const router = express.Router();

router.route("/").get(getAllReview).post(createReview);
router.route("/:id").put(updateReview);

module.exports = router;
