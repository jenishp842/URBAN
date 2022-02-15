const User = require("../model/user");

exports.register = async (data) => {
  try {
    const user = await User.create({ ...data });
    return user;
  } catch (err) {
    throw err;
  }
};

exports.findUser = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    throw err;
  }
};
