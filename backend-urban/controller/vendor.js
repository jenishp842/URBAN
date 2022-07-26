const { serviceById } = require("../sevices/services");
const {
  createVnd,
  updateVnd,
  findVendors,
  findVendor,
} = require("../sevices/vendor");
const catchAsync = require("../utils/catchAsync");
const { sendResponse, sendError } = require("../utils/sendresponse");
const ts = require("time-slots-generator");

exports.createVendor = catchAsync(async (req, res, next) => {
  const { servicetime, working, starttime } = req.body;
  req.body.duration = servicetime;
  const timeslots = ts.getTimeSlots(
    [["", starttime * 60 - 1], [(starttime * 1 + working) * 60]],
    false,
    servicetime * 1
  );
  req.body.timeslots = timeslots;
  req.body.user = req.user._id;
  const vendor = await createVnd(req.body);
  if (!vendor) {
    return sendError(res, 400, "you are already providing this service");
  }
  sendResponse(res, 200, req.body);
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

exports.getVendor = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const vendor = await findVendor(id, req.user.id);
  if (!vendor) {
    return sendError(res, 404, "vendor not found");
  }
  sendResponse(res, 200, vendor);
});
