const sendEmail = require("../utils/sendEmail.js");
const User = require("../models/userModel");

const otp = async (req, res) => {
  try {
    const user = await User.findById(req.body.userid);
    const otp = req.body.otp;
    const message = `Your OTP for the varification is ${otp}`;
    await sendEmail({
      email: user.email,
      subject: `Pickup varification`,
      message: message,
    });
    res.status(200).json({
      sucess: true,
      message: "OTP send to user",
    });
  } catch (error) {
    res.status(500).json({
      message: "some internal server error occured",
      error: error.message,
    });
  }
};

module.exports = otp;
