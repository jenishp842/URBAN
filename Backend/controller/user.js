const { register, findUser } = require("../sevices/user");
const catchAsync = require("../utils/catchAsync");
const { sendResponse, sendError } = require("../utils/sendresponse");

// register user

exports.Register = catchAsync(async (req, res, next) => {
  const user = await register(req.body);
  sendResponse(res, 201, user);
});

exports.Login = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const user = await findUser(req.body.email);
  if (!user) {
    return sendError(res, 404, "email or password is incorrect");
  }
  const comparePassword = await user.comparePassword(req.body.password);
  if (!comparePassword) {
    return sendError(res, 404, "email or password is incorrcet");
  }
  const token = user.getJwt();
  return sendResponse(res, 200, { user, token });
});
