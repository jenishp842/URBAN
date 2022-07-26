const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  vendor: {
    type: mongoose.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
