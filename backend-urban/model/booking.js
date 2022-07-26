const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
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
  starttime: {
    type: Number,
    required: true,
  },
  endtime: Number,
  status: String,
  vendor: {
    Types: mongoose.Types.ObjectId,
    ref: "Vendor",
  },
});
