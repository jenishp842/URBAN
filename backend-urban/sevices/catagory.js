const Catagory = require("../model/catagory");

exports.createCat = async (data) => {
  try {
    const catagory = await Catagory.create({ ...data });
    return catagory;
  } catch (err) {
    throw err;
  }
};
exports.updateCat = async (id, data) => {
  try {
    const catagory = await Catagory.findByIdAndUpdate(id, data, { new: true });
    return catagory;
  } catch (err) {
    throw err;
  }
};
exports.findCat = async () => {
  try {
    const catagory = await Catagory.find({});
    return catagory;
  } catch (err) {
    throw err;
  }
};
