const { serviceById } = require("../sevices/services");
const { createVnd, updateVnd, findVendors } = require("../sevices/vendor");
const catchAsync = require("../utils/catchAsync");
const { sendResponse, sendError } = require("../utils/sendresponse");

exports.createVendor = catchAsync(async (req, res, next) => {
  const vendor = await createVnd(req.body);
  sendResponse(res, 200, vendor);
});

exports.updateVendor = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const vendor = await updateVnd(id, req.body);
  if (!vendor) {
    return sendError(res, 404, "vendor id not found");
  }
  sendResponse(res, 200, vendor);
});

exports.getAllVendor = catchAsync(async (req, res, next) => {
  const vendor = await findVendors();
  sendResponse(res, 200, vendor);
});

// exports.getVendorsbyId = catchAsync(async (req, res, next) => {
//   const { serviceId } = req.body;
//   const vendor = await vendorById(catagoryId);
//   sendResponse(res, 200, vendor);
// });
