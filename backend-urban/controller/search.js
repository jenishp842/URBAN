const { createCat, updateCat, findCat } = require("../sevices/catagory");
const catchAsync = require("../utils/catchAsync");
const { sendResponse, sendError } = require("../utils/sendresponse");
const Catagory = require("../model/catagory");
const Vendor = require("../model/vendors");

exports.search = catchAsync(async (req, res, next) => {
  const { keyword } = req.body;
  //   const search = await Catagory.aggregate([
  //     {
  //       $lookup: {
  //         from: "services",
  //         foreignField: "catagory",
  //         localField: "_id",
  //         as: "service",
  //       },
  //     },
  //     {
  //       $unwind: { path: "$service", preserveNullAndEmptyArrays: true },
  //     },
  //     {
  //       $lookup: {
  //         from: "vendors",
  //         foreignField: "service",
  //         localField: "service._id",
  //         as: "vendor",
  //       },
  //     },
  //     {
  //       $unwind: { path: "$vendor", preserveNullAndEmptyArrays: true },
  //     },
  //     {
  //       $match: {
  //         $or: [
  //           { name: { $regex: keyword, $options: "i" } },
  //           { "service.name": { $regex: keyword, $options: "i" } },
  //           { "vendor.name": { $regex: keyword, $options: "i" } },
  //         ],
  //       },
  //     },
  //   ]);
  //   console.log(search.length);
  const search = await Vendor.aggregate([
    {
      $lookup: {
        from: "services",
        foreignField: "_id",
        localField: "service",
        as: "service",
      },
    },
    {
      $unwind: {
        path: "$service",
      },
    },
    {
      $lookup: {
        from: "catagories",
        foreignField: "_id",
        localField: "service.catagory",
        as: "catagory",
      },
    },
    {
      $unwind: {
        path: "$catagory",
      },
    },
    {
      $match: {
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { shopname: { $regex: keyword, $options: "i" } },
          { "service.name": { $regex: keyword, $options: "i" } },
          { "catagory.name": { $regex: keyword, $options: "i" } },
        ],
      },
    },
  ]);
  console.log(search.length);
  sendResponse(res, 200, search);
});
