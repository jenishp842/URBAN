const { createCat, updateCat, findCat } = require("../sevices/catagory");
const { serviceById } = require("../sevices/services");
const catchAsync = require("../utils/catchAsync");
const { sendResponse, sendError } = require("../utils/sendresponse");

exports.createCatagory = catchAsync(async (req, res, next) => {
  const catagory = await createCat(req.body);
  sendResponse(res, 200, catagory);
});

exports.updateCatagory = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const catagory = await updateCat(id, req.body);
  if (!catagory) {
    return sendError(res, 404, "catagory id not found");
  }
  sendResponse(res, 200, catagory);
});

exports.getAllCatagory = catchAsync(async (req, res, next) => {
  const catagory = await findCat();
  sendResponse(res, 200, catagory);
});

exports.getServicesbyId = catchAsync(async (req, res, next) => {
  const { catagoryId } = req.body;
  console.log(catagoryId);
  const service = await serviceById(catagoryId);
  sendResponse(res, 200, service);
});
