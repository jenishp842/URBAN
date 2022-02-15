const mongoose = require("mongoose");

const CatagorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Catagory", CatagorySchema);
