const Review = require("../model/review");
const mongoose = require("mongoose");
const Vendor = require("../model/vendors");

exports.createReviews = async (data) => {
  const review = await Review.create({ ...data });
  const avgRat = await Review.aggregate([
    {
      $match: { vendor: mongoose.Types.ObjectId(data.vendor) },
    },
    {
      $group: {
        _id: "$vendor",
        average: { $avg: "$rating" },
      },
    },
  ]);
  const vnd = await Vendor.findByIdAndUpdate(
    data.vendor,
    { rating: avgRat[0].average },
    { new: true, runValidators: false }
  );
  console.log(avgRat, vnd);
  return review;
};

exports.getALlReviews = async () => {
  const review = await Review.find({});
  return review;
};

exports.updateReviews = async (data, id) => {
  try {
    const review = await Review.findByIdAndUpdate(id, data, { new: true });
    const avgRat = await Review.aggregate([
      {
        $match: { vendor: mongoose.Types.ObjectId(data.vendor) },
      },
      {
        $group: {
          _id: "$vendor",
          average: { $avg: "$rating" },
        },
      },
    ]);
    const vnd = await Vendor.findByIdAndUpdate(
      data.vendor,
      { rating: avgRat[0].average },
      { new: true, runValidators: false }
    );
    console.log(avgRat, vnd);
    return review;
  } catch (err) {
    throw err;
  }
};
