const express = require("express");
const {
  createCatagory,
  getAllCatagory,
  updateCatagory,
  getServicesbyId,
} = require("../controller/catagory");
const { checkToken } = require("../middelware/auth");

const router = express.Router();
router.use(checkToken);
router.route("/").post(createCatagory).get(getAllCatagory);
router.route("/:id").patch(updateCatagory);
router.post("/services", getServicesbyId);
module.exports = router;
