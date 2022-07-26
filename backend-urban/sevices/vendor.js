const Vendor = require("../model/vendors");
const Review = require("../model/review");
const mongoose = require("mongoose");
const review = require("../model/review");

exports.createVnd = async (data) => {
  try {
    const isThere = await Vendor.findOne({
      service: data.service,
      user: data.user,
    });
    if (isThere) {
      return false;
    }
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
exports.findVendor = async (id, user) => {
  try {
    // const vendor = await Vendor.findById(id).populate("service");
    const vendor = await Vendor.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) },
      },
      {
        $lookup: {
          from: "reviews",
          foreignField: "vendor",
          localField: "_id",
          pipeline: [
            {
              $lookup: {
                from: "users",
                foreignField: "_id",
                localField: "user",
                //let: { cuser: "$user" },
                // pipeline: [
                //   {
                //     $match: {
                //       $expr: {
                //         $eq: [user, "$$cuser"],
                //       },
                //     },
                //   },
                // ],
                as: "users",
              },
            },
            {
              $replaceRoot: {
                newRoot: {
                  $mergeObjects: [{ $arrayElemAt: ["$users", 0] }, "$$ROOT"],
                },
              },
            },
            {
              $project: {
                users: 0,
              },
            },
          ],
          as: "review",
        },
      },
    ]);
    // await Vendor.populate(vendor[0].review, { path: "user" });
    return vendor[0];
  } catch (err) {
    throw err;
  }
};
exports.vendorById = async (id) => {
  try {
    const vendor = await Vendor.find({ service: id }).populate("service");
    return vendor;
  } catch (err) {
    throw err;
  }
};
