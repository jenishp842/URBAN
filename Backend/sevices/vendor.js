const Vendor = require("../model/vendors");

exports.createVnd = async (data) => {
  try {
    const vendor = await Vendor.create({ ...data });
    return vendor;
  } catch (err) {
    throw err;
  }
};
exports.updateVnd = async (id, data) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(id, data, { new: true });
    return vendor;
  } catch (err) {
    throw err;
  }
};
exports.findVendors = async () => {
  try {
    const vendor = await Vendor.find({});
    return vendor;
  } catch (err) {
    throw err;
  }
};

exports.vendorById = async (id) => {
  try {
    const vendor = await Vendor.find({ service: id });
    return vendor;
  } catch (err) {
    throw err;
  }
};
