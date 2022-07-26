const { createServ, updateServ, findServices } = require("../sevices/services");
const { vendorById } = require("../sevices/vendor");
const catchAsync = require("../utils/catchAsync");
const { sendResponse, sendError } = require("../utils/sendresponse");

exports.createService = catchAsync(async (req, res, next) => {
  const service = await createServ(req.body);
  sendResponse(res, 200, service);
});

exports.updateService = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const service = await updateServ(id, req.body);
  if (!service) {
    return sendError(res, 404, "service id not found");
  }
  sendResponse(res, 200, service);
});

exports.getAllservice = catchAsync(async (req, res, next) => {
  const service = await findServices();
  sendResponse(res, 200, service);
});

exports.getVendorsbyId = catchAsync(async (req, res, next) => {
  const { serviceId } = req.body;
  const vendor = await vendorById(serviceId);
  if (!vendor[0]) {
    return sendError(res, 404, "no vendor on this service");
  }
  sendResponse(res, 200, vendor);
});
