const { createCat, updateCat, findCat } = require("../sevices/catagory");
const {
  getALlReviews,
  createReviews,
  updateReviews,
} = require("../sevices/review");
const { serviceById } = require("../sevices/services");

const catchAsync = require("../utils/catchAsync");
const { sendResponse, sendError } = require("../utils/sendresponse");

exports.getAllReview = catchAsync(async (req, res, next) => {
  const review = await getALlReviews();
  sendResponse(res, 200, review);
});

exports.createReview = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
  const review = await createReviews({ ...req.body });
  sendResponse(res, 200, review);
});

exports.updateReview = catchAsync(async (req, res, next) => {
  req.body.user = req.user.id;
  const review = await updateReviews({ ...req.body }, req.params.id);
  if (!review) {
    return sendError(res, 404, "review not found");
  }
  return sendResponse(res, 200, review);
});
