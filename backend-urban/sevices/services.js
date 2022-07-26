const Services = require("../model/services");

exports.createServ = async (data) => {
  try {
    const service = await Services.create({ ...data });
    return service;
  } catch (err) {
    throw err;
  }
};
exports.updateServ = async (id, data) => {
  try {
    const service = await Services.findByIdAndUpdate(id, data, { new: true });
    return service;
  } catch (err) {
    throw err;
  }
};
exports.findServices = async () => {
  try {
    const service = await Services.find({});
    return service;
  } catch (err) {
    throw err;
  }
};

exports.serviceById = async (id) => {
  try {
    const service = await Services.find({ catagory: id });
    return service;
  } catch (err) {
    throw err;
  }
};
