const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  catagory: {
    type: mongoose.Types.ObjectId,
    ref: "Catagory",
    required: true,
  },
});

module.exports = mongoose.model("Service", ServicesSchema);
