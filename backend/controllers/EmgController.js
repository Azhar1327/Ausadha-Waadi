const EmergencyMed = require("../models/EmergencyMed");
const cloudinary = require("cloudinary");

exports.createEmergencyRequest = async (req, res) => {
  try {
    const name = req.body.name;
    const medicine = req.body.medicine;
    const address = req.body.address;
    const phoneNO = req.body.phoneNO;

    const myCloud = await cloudinary.v2.uploader.upload(req.body.prescription, {
      folder: "resume",
      width: 150,
      crop: "scale",
    });

    const prescription = myCloud.secure_url;
    const request = await EmergencyMed.create({
      name,
      medicine,
      address,
      phoneNO,
      prescription,
    });

    res.status(200).json({
      message: "Request Created Sucessfully",
      data: request,
    });
  } catch (error) {
    res.status(500).json({
      message: "some internal server occured",
      error: error.message,
    });
  }
};

exports.getAllEmergencyRequest = async (req, res) => {
  try {
    const request = await EmergencyMed.find();
    res.status(200).json({
      message: "All Request Fetch",
      data: request,
    });
  } catch (error) {
    res.status(500).json({
      message: "some internal server occured",
      error: error.message,
    });
  }
};
