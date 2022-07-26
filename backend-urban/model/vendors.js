const mongoose = require("mongoose");

const VendorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  service: {
    type: mongoose.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  shopname: String,
  address: {
    city: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  price: Number,
  starttime: String,
  duration: Number,
  working: Number,
  rating: Number,
  timeslots: Array,
  contact: {
    type: Number,
    required: true,
  },
  comment: String,
  holiday: {
    type: Array,
  },
});
module.exports = mongoose.model("Vendor", VendorsSchema);
